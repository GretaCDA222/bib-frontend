import React, {useEffect, useState} from "react";
import { useForm } from "react-hook-form";
 
import "./Update.css";
 
const UpdateItem = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
 
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation
 
  console.log(watch("firstName")); // you can watch individual input by pass the name of the input
 
  return (
    <form className="form-rhf" onSubmit={handleSubmit(onSubmit)}>
      <label className="label-rhf">Titre</label>
      <input
        className="input-rhf"
        {...register("titre", {
          required: true,
          //   maxLength: 20,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      {errors?.titre?.type === "required" && (
        <p className="p-rhf">This field is required</p>
      )}
      {/* {errors?.titre?.type === "maxLength" && (
            <p className="p-rhf" >First name cannot exceed 20 characters</p>
          )} */}
      {errors?.titre?.type === "pattern" && (
        <p className="p-rhf">Alphabetical characters only</p>
      )}
 
      <label className="label-rhf">Année</label>
      <input
        className="input-rhf"
        {...register("annee", { min: 1500, max: 2100 })}
      />
      {errors.annee && (
        <p className="p-rhf">L'année doit être sur 4 caractères</p>
      )}
 
      <label className="label-rhf">Auteur</label>
      <input
        className="input-rhf"
        {...register("auteur", { pattern: /^[A-Za-z]+$/i })}
      />
      {errors?.auteur?.type === "pattern" && (
        <p className="p-rhf">Alphabetical characters only</p>
      )}
 
      <label className="label-rhf">URL de l'image</label>
      <input className="input-rhf" {...register("imageUrl")} />
 
      <input type="submit" className="input-rhf" />
    </form>
  );
};
 
export default UpdateItem;