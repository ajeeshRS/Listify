import { Checkbox, Grid, Icon, IconButton, Typography } from "@mui/material";
import "./TaskPage.css";
import { useState } from "react";
import {
  CheckCircle,
  Delete,
  DeleteForever,
  DeleteSweep,
  RadioButtonUnchecked,
} from "@mui/icons-material";

function TaskPage() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [recentlyDeleted, setRecentlyDeleted] = useState([]);

  const addButtonHandler = () => {
    if (!inputValue) {
      alert("enter a value !");
    } else {
      const item = {
        id: Math.floor(Math.random() * 1000),
        value: inputValue,
      };

      setItems((prevItem) => [...prevItem, item]);
      setInputValue("");
    }
  };

  const completeTaskHandler = (task) => {
    setCompletedTasks((prevTask) => [...prevTask, task]);
    setItems(items.filter((item) => item !== task));
  };
  const deleteButtonHandler = (task) => {
    setRecentlyDeleted((prevTask) => [...prevTask, task]);
    setItems(items.filter((item) => item !== task));
  };
  const maxLength = 40;
  return (
    <div className="task-containers">
      <Grid className="main-container" container md={12}>
        <Grid
          container
          item
          md={12}
          justifyContent={"center"}
          alignItems={"center"}
          mt={10}
        >
          <input
            className="input-field"
            type="text"
            value={inputValue}
            maxLength={40}
            placeholder="Enter task"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <IconButton onClick={addButtonHandler}>
            <img className="svg-img" src="/Add_square_fill.svg" />
          </IconButton>
        </Grid>
        {inputValue.length === maxLength && (
          <Grid container md={12} justifyContent={"center"} pr={8}>
            <Typography color="error" fontSize={12}>
              You&apos;ve reached the character limit of {maxLength} !
            </Typography>
          </Grid>
        )}
        <Grid container md={12}>
          {
            <Typography
              ml={7}
              mt={5}
              width={100}
              height={20}
              className="task-head"
              fontFamily={"poppins"}
              fontSize={20}
              fontWeight={600}
            >
              Tasks({items.length})
            </Typography>
          }
          <Grid container md={12} mt={2} ml={3}>
            <ul>
              {items.length > 0 ? (
                items.map((item) => {
                  return (
                    <li className="task" key={item.id}>
                      <Checkbox
                        icon={<RadioButtonUnchecked />}
                        onChange={() => completeTaskHandler(item)}
                      />
                      {item.value}
                      <IconButton
                        style={{
                          position: "absolute",
                          left: "550px",
                          paddingLeft: "10px",
                          paddingBottom: "15px",
                        }}
                        onClick={() => deleteButtonHandler(item)}
                      >
                        <Delete style={{ color: "red" }} />
                      </IconButton>
                    </li>
                  );
                })
              ) : (
                <Typography
                  style={{
                    color: "grey",
                    fontFamily: "montserrat",
                    fontSize: 15,
                  }}
                >
                  Tap + button to add tasks !
                </Typography>
              )}
            </ul>
          </Grid>
        </Grid>
        <Grid container md={12}>
          {
            <Typography
              ml={7}
              mt={5}
              width={"100%"}
              height={20}
              className="task-head"
              fontFamily={"poppins"}
              fontSize={20}
              fontWeight={600}
              alignItems={"center"}
            >
              Completed Tasks({completedTasks.length})
              {completedTasks.length > 0 ? (
                <IconButton
                  onClick={() => setCompletedTasks([])}
                  style={{ paddingLeft: "10px", color: "red" }}
                >
                  <DeleteForever />
                </IconButton>
              ) : null}
            </Typography>
          }
          <Grid container md={12} mt={4} ml={3}>
            <ul>
              {completedTasks.length > 0 ? (
                completedTasks.map((item) => {
                  return (
                    <li
                      key={item.id}
                      style={{
                        textDecoration: "line-through",
                        listStyleType: "none",
                      }}
                    >
                      <Icon style={{ paddingRight: "10px" }}>
                        <CheckCircle />
                      </Icon>
                      {item.value}
                    </li>
                  );
                })
              ) : (
                <Typography
                  style={{
                    color: "grey",
                    fontFamily: "montserrat",
                    fontSize: 15,
                  }}
                >
                  No items here !
                </Typography>
              )}
            </ul>
          </Grid>
        </Grid>
        <Grid container md={12}>
          {
            <Typography
              ml={7}
              mt={5}
              width={"100%"}
              height={20}
              className="task-head"
              fontFamily={"poppins"}
              fontSize={20}
              fontWeight={600}
              alignItems={"center"}
            >
              Recently deleted ({recentlyDeleted.length})
              {recentlyDeleted.length > 0 ? (
                <IconButton
                  onClick={() => setRecentlyDeleted([])}
                  style={{ paddingLeft: "10px", color: "red" }}
                >
                  <DeleteForever />
                </IconButton>
              ) : null}
            </Typography>
          }
          <Grid container md={12} mt={4} ml={3} mb={2}>
            <ul>
              {recentlyDeleted.length > 0 ? (
                recentlyDeleted.map((item) => {
                  return (
                    <li style={{ listStyleType: "none" }} key={item.id}>
                      {" "}
                      <Icon style={{ paddingRight: "10px" }}>
                        <DeleteSweep />
                      </Icon>
                      {item.value}
                    </li>
                  );
                })
              ) : (
                <Typography
                  style={{
                    color: "grey",
                    fontFamily: "montserrat",
                    fontSize: 15,
                  }}
                >
                  No items here !
                </Typography>
              )}
            </ul>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default TaskPage;
