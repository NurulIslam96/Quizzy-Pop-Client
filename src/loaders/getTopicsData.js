export const getTopicsData = async () => {
    const topicsData = await fetch('https://openapi.programming-hero.com/api/quiz')
    const topicsJson = await topicsData.json()
    const topics = topicsJson.data
    return topics
}