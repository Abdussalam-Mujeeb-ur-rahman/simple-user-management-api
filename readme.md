# simple-user-management-api
## - **GET** get homepage

## - **POST** sign up
`http://localhost:3000/auth/signup`
**body**
`{
  "first_name": "Abdussalam",
  "last_name": "Abdussalam",
  "dob": "09-06-2004",
  "email": "abduss@gmail.com",
  "password": "123456"
}`

## - **POST** login
`http://localhost:3000/auth/login`
**body**
`{
  "email": "abdussalam@gmail.com",
  "password": "123456"
}`

## - **POST** edit profile
`http://localhost:3000/profile/edit_profile`
**body**
`{
  "last_name": "Abdussalam",
  "first_name": "saleem",
  "dob": "10-10-2009"
}` 

## - **POST** edit profile picture
`http://localhost:3000/profile/edit_profile_pic`
**body** - form-data

## - **DELETE** delete user
`http://localhost:3000/user`
