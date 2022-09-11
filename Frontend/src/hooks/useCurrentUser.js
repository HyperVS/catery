import { useState, useEffect } from "react";
import { auth } from "../components/Firebase";
import axios from "axios";

export const useCurrentUser = () => {
    const [user, setUser] = useState();
    const firebaseUser = auth.currentUser();

    const fetchUser = async () => {
        const result = await axios.get(`http://localhost:8080/v1/users/getById?id=${firebaseUser.uid}`)
        setUser(result.data)
    }

    useEffect( () => {
        try {
            fetchUser();
        } catch (error) {
            console.error(error);
        }
    })
    return user;
};