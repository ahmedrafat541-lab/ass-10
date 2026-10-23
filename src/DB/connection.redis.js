import { createClient } from "redis"

export const redis_client = createClient({
  url: "rediss://default:gQAAAAAAA5qYAAIgcDJiNzJkNjI5ZjgxMWM0NGJmYjA0NmRhNDQ2MWU0MmFhNQ@enabled-bunny-236184.upstash.io:6379"
});


export default async function connectionRedis(){


    try {
        await redis_client.connect();
        console.log("Redis connected successfully")
    } catch (error) {
        console.error("Error connecting to Redis:", error)
    }


}


