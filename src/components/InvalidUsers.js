import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import InvalidUserCard from "./InvalidUserCard";
import { setsetInvalidUsers } from '../redux/actions/formActions'
import { getInvalidUser } from "../api/api";
import * as api from '../api/api'
import { setInvalidUsers } from "../redux/actions/formActions";
import "./InvalidUsers.css";


function InvalidUsers() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const data = useSelector((state) => state);

    useEffect(() => {
        if (!localStorage.getItem("admin")) {
            navigate("/");
        } else {
            axios
                .get("http://localhost:5000/api/user/invalidusers")
                .then((response) => {
                    dispatch(setInvalidUsers(response.data));
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, []);


    console.log("The Invalidusers: ", data.users.validateUsers);
    const users = data.users.validateUsers;

    return (

        <div>
            <h1>.</h1>
            <h1>Validate Users</h1>
            <div className="main">
                {
                    users.length > 0 ? users.map((item, index) =>
                        <InvalidUserCard
                            id={item._id}
                            pid={item.pid}
                            firstname={item.firstname}
                            lastname={item.lastname}
                            phone={item.phone}
                            email={item.email}
                            year={item.year}
                            dept={item.dept}
                            div={item.class}
                            idimage={item.IDcard}
                            verified={item.verified}
                        />
                    ) : <h1>No users found</h1>
                }
            </div>
        </div>
    );
}

export default InvalidUsers;
