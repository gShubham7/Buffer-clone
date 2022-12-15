import React, { useCallback, useMemo, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
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
  ModalCloseButton,
  Select,
  Textarea,
  useToast,
  HStack,
  FormControl,
  Input,
} from "@chakra-ui/react";
import { Schedule_Date } from "./DatePicker";
import { Form, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/posts/post.action";

const locales = {
  "en-In": require("date-fns/locale/en-IN"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedDate, setSelectedDate] = useState("");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [schedule, setSchedule] = useState("");
  const [image, setImage] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [imageName, setImageName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddEvent = () => {
    setAllEvents([...allEvents, newEvent]);
  };

  const handleEvent = (value) => {
    setNewEvent({ title: `${value}`, start: new Date(), end: new Date() });
  };

  const handleSelectSlot = useCallback(
    (selectedSlot) => {
      if (selectedSlot < new Date()) {
        return;
      }
      setSelectedDate(selectedSlot.start);
      onOpen();
    },
    [newEvent]
  );

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
      defaultDate: new Date(2015, 3, 12),
      scrollToTime: new Date(1970, 1, 1, 6),
    }),
    []
  );

  const handleSubmit = () => {
    dispatch(createPost(newEvent));
    setAllEvents([...allEvents, newEvent]);
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
          right="21%"
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
              <Textarea
                h="250px"
                mt="10px"
                onChange={(e) =>
                  setNewEvent({
                    ...newEvent,
                    title: e.target.value,
                    start: selectedDate,
                    end: selectedDate,
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
                  <Input
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
                    toast({
                      description:
                        "Great! The post has been added to your queue.",
                      status: "success",
                      duration: 3000,
                      isClosable: true,
                    });
                    onClose();
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
          // defaultDate={defaultDate}
          popup
          style={{ height: "83vh" }}
        />
      </Box>
    </>
  );
};

export default CalendarComponent;
