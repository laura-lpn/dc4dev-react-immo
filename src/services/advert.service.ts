import { AdvertType, CreateAdvertDto } from "../types/advert"

const ENDPOINT = `${import.meta.env.VITE_APP_API_URL}/adverts`

const findAll = async () => {
    const request = await fetch(ENDPOINT)

    return await request.json()
}

const findOne = async (id: string) => {
    const request = await fetch(`${ENDPOINT}/${id}`)

    return await request.json()
}

const create = async (credentials: CreateAdvertDto) => {
    const request = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      })

    return await request.json()
}

const remove = async (id: number) => {
    const request = await fetch(`${ENDPOINT}/${id}`, {
        method: "DELETE",
    })
    return await request.json()
}

const update = async (credentials: AdvertType, id: string) => {
    const request = await fetch(`${ENDPOINT}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    })

    return await request.json()
}

const AdvertService = {
    findAll,
    findOne,
    create,
    remove,
    update
}

export default AdvertService