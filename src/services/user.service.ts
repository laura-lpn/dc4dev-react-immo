import { CreateUserDTO } from "../types/user"

const ENDPOINT = `${import.meta.env.VITE_APP_API_URL}/users`

const create = async (credentials: CreateUserDTO) => {
    const request = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      })

    return await request.json()
}


const UserService = {
    create,
}

export default UserService