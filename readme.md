# simple-user-management-api
** This API is built by *Abdussalam Mujeeb-ur-rahman* on the authority of *Technify Incubator* **.
### The API is mainly for user management, with basic authentication, validation, authorization, security
---

## - **POST** sign up
`https://abdussalam-mujeeb-ur-rahman-simple-user.onrender.com/auth/signup` > sign up with details 
### **body**
`{
  "first_name": "firstname",
  "last_name": "lastname",
  "dob": "09-06-2004",
  "email": "gmail@gmail.com",
  "password": "password"
}`
>
---

## - **POST** login
`https://abdussalam-mujeeb-ur-rahman-simple-user.onrender.com/auth/login` > login with the correct email and password
### **body**
 `{
  "email": "gmail@gmail.com",
  "password": "password"
}`

>
---

## - **POST** edit profile
`https://abdussalam-mujeeb-ur-rahman-simple-user.onrender.com/profile/edit_profile` > you can only edit three of your details, which are last_name, first_name and dob, and you can decide to edit only one or two or all three.
### **body**
`{
  "last_name": "lastname",
  "first_name": "firstname",
  "dob": "10-10-2009"
}` 

>
---

## - **POST** edit profile picture 
`https://abdussalam-mujeeb-ur-rahman-simple-user.onrender.com/profile/edit_profile_pic` > do not forget to include multipart/form-data
### **body** 
{form action="/profile" method="post" enctype="multipart/form-data"}
  {input type="file" name="image" /}

>
---

## - **DELETE** delete user > note: you can only delete your account when you are logged in
`https://abdussalam-mujeeb-ur-rahman-simple-user.onrender.com/user`
