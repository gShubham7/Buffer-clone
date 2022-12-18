import {
    Box,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Heading,
    Text,
    Stack,
    Button,
    HStack,
    SimpleGrid,
    Editable,
    EditablePreview,
    EditableTextarea,
  } from "@chakra-ui/react";
  import React, { useEffect, useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { deletePost, getChannelsPosts } from "../redux/posts/post.action";
  import DatePicker from "react-datepicker";
  import "react-datepicker/dist/react-datepicker.css";
  
  const InstagramPage = () => {
    const { data } = useSelector((store) => store.posts);
    const dispatch = useDispatch();
    const [editDate, setEditDate] = useState({});
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      dispatch(getChannelsPosts("instagram_posts"));
    }, []);
  
    const handleDelete = (_id) => {
      dispatch(deletePost(_id, "instagram_posts"));
      // dispatch(getChannelsPosts("facebook_posts"));
    };
  
    return (
      <Box w="82.5%">
        <SimpleGrid
          spacing={4}
          mt={5}
          textAlign="left"
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        >
          {data?.map((el) => (
            <Card key={el.start + Date.now()}>
              <CardHeader>
                <Heading size="md">
                  {/* {el.end.split("T")[0]} */}
                  {/* <Editable defaultValue={el.end.split("T")[0]}>
                    <EditablePreview />
                    <EditableTextarea
                      onChange={(e) => setEditDate(e.target.value)}
                    />
                  </Editable> */}
                  <DatePicker
                    placeholderText={el.end.split("T")[0]}
                    value={el.end.split("T")[0]}
                    selected={el.end}
                    onChange={(start) => setEditDate({ start, end: start })}
                  />
                </Heading>
              </CardHeader>
              <CardBody>
                <Editable defaultValue={el.title}>
                  <EditablePreview />
                  <EditableTextarea />
                </Editable>
              </CardBody>
              {/* <CardBody>
                <Text>{el.title}.</Text>
              </CardBody> */}
              <CardFooter gap={5}>
                <Button w={20} colorScheme="blue">
                  Edit
                </Button>
                <Button
                  w={20}
                  colorScheme="red"
                  onClick={() => handleDelete(el._id)}
                >
                  Delete
                </Button>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    );
  };
  
  export default InstagramPage;
  