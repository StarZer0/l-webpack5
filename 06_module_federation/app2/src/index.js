(async () => {
    const { add } = await import("RemoteApp/utils")

    console.log(add(1, 2))
})()