import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import getTime from "date-fns/getTime";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaUserCircle } from "react-icons/fa";
import {
  Box,
  Flex,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Select,
  Textarea,
  useToast,
  HStack,
  FormControl,
  Input,
  CheckboxGroup,
  Stack,
  Checkbox,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createPost, getPosts } from "../../redux/posts/post.action";

const locales = {
  "en-In": require("date-fns/locale/en-IN"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  getTime,
  locales,
});

const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2022, 9, 26),
    end: new Date(2022, 9, 26),
  },
  {
    title: "Vacation",
    start: new Date(2022, 12, 25),
    end: new Date(2023, 1, 2),
  },
  {
    title: "Conference",
    start: new Date(2022, 10, 1),
    end: new Date(2022, 10, 1),
  },
];

const CalendarComponent = () => {
  const { data } = useSelector((store) => store.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [imageName, setImageName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [channel, setChannel] = useState(["facebook", "instagram", "linkedin"]);
  const [selectedChannel, setSelectedChannel] = useState({
    facebook_posts: true,
    instagram_posts: true,
    linkedin_posts: true,
  });

  useEffect(() => {
    dispatch(getPosts());
    setAllEvents(data);
  }, [allEvents]);

  const handleAddEvent = () => {
    setAllEvents([...allEvents, newEvent]);
  };

  const handleSelectSlot = useCallback(() => {
    onOpen();
  }, [newEvent]);

  const handleSelectEvent = useCallback(
    (event) =>
      toast({
        description: event.title,
        status: "success",
        duration: 3000,
        isClosable: true,
      }),
    []
  );

  const { defaultDate, scrollToTime } = useMemo(
    () => ({
      defaultDate: new Date(),
      scrollToTime: new Date(),
    }),
    []
  );

  const handleSubmit = () => {
    if (!newEvent.title) {
      return toast({
        description: "Text field is empty",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    } else if (!newEvent.start || !newEvent.end) {
      return toast({
        description: "Please schedule your Post date",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    } else if (Object.values(selectedChannel).every((el) => el === false)) {
      return toast({
        description: "Please select minimun one channel",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
    dispatch(createPost({ ...newEvent, channels: selectedChannel }));
    setAllEvents([...allEvents, newEvent]);
    setNewEvent({});
    onClose();
  };

  const handleChannel = (e) => {
    const { name, checked } = e.target;
    console.log(name);
    setSelectedChannel({ ...selectedChannel, [name]: checked });
  };

  return (
    <>
      <Box w="82.5%" mt="30px">
        <Button
          variant="solid"
          colorScheme="messenger"
          borderRadius="3px"
          size="md"
          position="absolute"
          right="22%"
          mt="-2px"
          onClick={onOpen}
        >
          Create Post
        </Button>
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader borderBottom="1px solid grey">
              <Flex
                alignItems="center"
                ml="5px"
                mr="5px"
                justifyContent="space-between"
              >
                <Text fontSize="sm">Campaign</Text>
                <Box w="280px">
                  <Select borderRadius="3px" placeholder="No Campaign" />
                </Box>
              </Flex>
            </ModalHeader>
            <ModalBody>
              <FaUserCircle icon="fa-duotone" size="26px" swapopacity="true" />
              <CheckboxGroup colorScheme="green" defaultValue={channel}>
                <Stack spacing={[1, 5]} direction={"row"}>
                  {channel.map((el) => (
                    <Checkbox
                      defaultChecked
                      key={el}
                      value={el}
                      name={`${el}_posts`}
                      onChange={(e) => handleChannel(e)}
                    >
                      {el}
                    </Checkbox>
                  ))}
                </Stack>
              </CheckboxGroup>
              <Textarea
                h="250px"
                mt="10px"
                onChange={(e) =>
                  setNewEvent({
                    ...newEvent,
                    title: e.target.value,
                  })
                }
                placeholder="What would you like to share?"
              />
              {/* <Input type="file" /> */}
            </ModalBody>
            <ModalFooter>
              <HStack>
                <Box fontWeight="bold">
                  <Text>Schedule Time </Text>
                  {/* <Schedule_Date /> */}
                  {/* <Input
                    placeholder="Select Date and Time"
                    size="xs"
                    type="datetime-local"
                    // value={selectedDate}
                    onChange={(e) =>
                      setNewEvent({
                        ...newEvent,
                        start: new Date(),
                        end: new Date(),
                      })
                    }
                  /> */}
                  <DatePicker
                    placeholderText="Start Date"
                    selected={newEvent.start}
                    onChange={(start) =>
                      setNewEvent({ ...newEvent, start, end: start })
                    }
                  />
                </Box>
                <Button
                  colorScheme="gray"
                  borderRadius="3px"
                  onClick={() => {
                    handleAddEvent();
                    toast({
                      description: "Great! Your draft is saved.",
                      status: "success",
                      duration: 3000,
                      isClosable: true,
                    });
                    onClose();
                  }}
                >
                  Save as Draft
                </Button>
                <Button
                  colorScheme="blue"
                  borderRadius="3px"
                  onClick={() => {
                    handleAddEvent();
                    handleSubmit();
                  }}
                >
                  Add to Queue
                </Button>
              </HStack>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Calendar
          localizer={localizer}
          events={allEvents}
          startAccessor="start"
          endAccessor="end"
          onSelectEvent={handleSelectEvent}
          onSelectSlot={handleSelectSlot}
          selectable
          scrollToTime={scrollToTime}
          defaultDate={defaultDate}
          popup
          style={{ height: "83vh", width: "81vw" }}
        />
      </Box>
    </>
  );
};

export default CalendarComponent;
