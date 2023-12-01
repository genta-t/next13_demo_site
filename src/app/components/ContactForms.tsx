import React, { useState } from "react";
import { Box, Alert } from "@mui/material";
import { useForm } from "react-hook-form";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { app } from "../firebase";
import BoxTypo from "./items/BoxTypo";
import Title from "./items/Title";
import InputFormItem from "./items/InputFormItem";
import TextAreaFormItem from "./items/TextAreaFormItem";
import FormButton from "./items/FormButton";
import { contextRule, emailRule, phoneNumberRule, textRule } from "../tsfile/rules";
import { TypesErrorMessageProps, TypesFormData } from "../types";

// const isEmpty = (obj: object) => !Object.keys(obj).length

const ContactForms = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<TypesFormData>();
  const db = getFirestore(app);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data: TypesFormData) => {
    const formattedDate = new Date(Date.now()).toLocaleString();

    const docData = {
      name: data.name,
      age: data.age,
      addles: data.addles,
      tel: data.tel,
      mail: data.mail,
      content: data.content,
      created_at: formattedDate,
      updated_at: formattedDate,
    };

    console.log("docData", docData)

    try {
      const docRef = await addDoc(collection(db, "contacts"), docData);
      console.log("Document successfully written!", docRef.id);
      // navigate('/thanks');
    } catch (error) {
      console.error("Error writing document: ", error);
      setErrorMessage("大変申し訳ございません、システム障害が発生しております。");
    }
  }

  const errKeys = Object.keys(errors) as Array<keyof TypesFormData>;

  const ErrorMessage = ({ message }: TypesErrorMessageProps) => {
    return errKeys.filter(k => errors[k] && k === message).map(k => (
      <Box mt="8px" key={k}>
        <Alert style={{ backgroundColor: "transparent", padding: "0" }} severity="error">
          <BoxTypo
            fs="S"
            color="#FF3535"
            fw="medium"
            lh="150%"
          >
            {errors[k]?.message}
          </BoxTypo>
        </Alert>
      </Box>
    ))
  }
  
  return (
    <>
      <Box width="90%" maxWidth="1080px" mx="auto" mt={{ xs: "80px", md: "304px" }}>
        <Box mb={{ xs: "56px", md: "120px" }} textAlign="center">
          <Title english="CONTACT" japanese="お問い合わせ" />
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <>
            <Box width="100%" m="auto">
              <InputFormItem
                title="なまえ"
                placeholder="なまえが入ります"
                name="name"
                register={register}
                rule={textRule("なまえ")}
                requiredItemFlag={true}
              />
              <ErrorMessage message={"name"}/> 
              <FormMb />
              <InputFormItem
                title="年齢"
                placeholder="21"
                name="age"
                register={register}
                rule={textRule("年齢")}
                requiredItemFlag={true}
              />
              <FormMb />
              <InputFormItem
                title="住所"
                placeholder="〇〇県〇〇市〇〇町"
                name="addles"
                register={register}
                rule={textRule("住所")}
                requiredItemFlag={true}
              />
              <ErrorMessage message={"addles"}/>
              <FormMb />
              <InputFormItem
                title="電話番号"
                placeholder="123-4567-8910"
                name="tel"
                register={register}
                rule={phoneNumberRule}
                requiredItemFlag={true}
              />
              <ErrorMessage message={"tel"}/>
              <FormMb />
              <InputFormItem
                title="メールアドレス"
                placeholder="mailAddles@gmail.com"
                name="mail"
                register={register}
                rule={emailRule}
                requiredItemFlag={true}
              />
              <ErrorMessage message={"mail"}/>
              <FormMb />
              <TextAreaFormItem
                title="お問い合わせ内容"
                placeholder="何か書いてね。"
                name="content"
                register={register}
                rule={contextRule}
                requiredItemFlag={true}
              />
              <ErrorMessage message={"content"}/>
              <FormMb />
            </Box>
            {errorMessage && 
              <Box 
                m="0 auto 32px auto"
                color="red"
                width="90%"
                maxWidth="700px"
              >
                <BoxTypo
                  ff="Notosans"
                  fs="S"
                  fw="medium"
                  lh="150%"
                >
                  {errorMessage}
                </BoxTypo>
              </Box>
            }
            <Box textAlign="center">
              <FormButton name={"この内容で送信する"} />
            </Box>
          </>
        </form>
      </Box>
    </>
  )
}

export default ContactForms;

const FormMb = ()  => {
  return(<Box mb={{ xs: "24px", md: "48px" }} />)
}