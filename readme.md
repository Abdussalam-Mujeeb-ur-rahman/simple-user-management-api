{
	"info": {
		"_postman_id": "bf540f68-b949-4a80-b30e-c2be90b59a49",
		"name": "simple-user-management-api",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "23410424"
	},
	"item": [
		{
			"name": "get homepage",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		},
		{
			"name": "signup",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"first_name\": \"Abdussalam\",\r\n    \"last_name\": \"Abdussalam\",\r\n    \"dob\": \"09-06-2004\",\r\n    \"email\": \"abduss@gmail.com\",\r\n    \"password\": \"123456\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/auth/signup",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"auth",
						"signup"
					]
				}
			},
			"response": []
		},
		{
			"name": "login",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"email\": \"abdussalam@gmail.com\",\r\n    \"password\": \"123456\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/auth/login",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"auth",
						"login"
					]
				}
			},
			"response": []
		},
		{
			"name": "Profile",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/profile",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"profile"
					]
				}
			},
			"response": []
		},
		{
			"name": "edit profile",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"last_name\": \"Abdussalam\",\r\n    \"first_name\": \"saleem\",\r\n    \"dob\": \"10-10-2009\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/profile/edit_profile",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"profile",
						"edit_profile"
					]
				}
			},
			"response": []
		},
		{
			"name": "edit profile picture",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "formdata",
					"formdata": [
						{
							"key": "image",
							"type": "file",
							"src": "/C:/Users/User/Desktop/Ice/png-icon/files.img/5.png"
						}
					]
				},
				"url": {
					"raw": "http://localhost:3000/profile/edit_profile_pic",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"profile",
						"edit_profile_pic"
					]
				}
			},
			"response": []
		},
		{
			"name": "delete user",
			"request": {
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/user",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"user"
					]
				}
			},
			"response": []
		}
	]
}