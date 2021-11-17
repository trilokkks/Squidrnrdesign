import { firestore } from "firebase";
import React from "react";
import { useHistory } from "react-router-dom";
import { useFirestore } from "reactfire";
import register from "../images/register.png";

export const Form = () => {
    const [name, setName] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [agree, setAgree] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const fireStore = useFirestore().collection("responses");
    const history = useHistory();

    const handleSubmit = async(e) => {
        if (!name) {
            alert("name cannot be empty");
            return;
        }
        if (!phone) {
            alert("phone cannot be empty");
            return;
        }
        if (!agree) {
            alert("please agree to the consequences");
            return;
        }

        setLoading(true);
        await fireStore.add({
            name,
            phone,
            created_at: firestore.Timestamp.now().toDate(),
        });
        setLoading(false);

        history.push("/success");
    };

    return ( <
        div className = "container form" >
        <
        div className = "title" >
        <
        img src = { register }
        alt = "register" / >
        <
        /div> <
        div className = "form-content" >
        <
        div className = "form-group" >
        <
        label > Your name < /label> <
        input type = "text"
        className = "form-control"
        placeholder = "Enter your name"
        value = { name }
        onChange = {
            (e) => setName(e.target.value)
        }
        /> < /
        div > <
        div className = "form-group" >
        <
        label > Phone < /label> <
        input type = "text"
        className = "form-control"
        placeholder = "Eg: 000-00-00-00"
        value = { phone }
        onChange = {
            (e) => setPhone(e.target.value)
        }
        /> < /
        div > <
        div className = "checkbox" >
        <
        div >
        <
        input type = "checkbox"
        id = "checkbox"
        checked = { agree }
        onChange = {
            (e) => setAgree(e.target.checked)
        }
        /> < /
        div > <
        label htmlFor = "checkbox" >
        Yes, I agree to all the consequences & Mental illness caused by the gaming event. <
        /label> < /
        div > <
        /div> <
        div className = "footer" >
        <
        button onClick = { handleSubmit }
        disabled = { loading } >
        Register now!
        <
        /button> < /
        div > <
        /div>
    );
};