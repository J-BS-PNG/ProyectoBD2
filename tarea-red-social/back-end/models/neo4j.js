const neo4j = require('neo4j-driver')
const driver = neo4j.driver("bolt://localhost:7687", neo4j.auth.basic("neo4j", "1234"))
const session = driver.session()

const findById = async (id) =>{
    const result = await session.run(`MATCH (a:Person)-[r:friendship]->(b:Person) WHERE a.correo = '${id}' RETURN b`)
    const newData = []
    result.records.forEach(element => {
        newData.push(element._fields[0].properties);
    });
    return  newData
}
const findRequestById = async (id) =>{
    const result = await session.run(`MATCH (a:Person)<-[r:friendshipRequest]-(b:Person) WHERE a.correo = '${id}' RETURN b`)
    const newData = []
    result.records.forEach(element => {
        newData.push(element._fields[0].properties);
    });
    return  newData
}
const AceptRequestById = async (id, id2) =>{
    const result = await session.run(`MATCH (n {correo: '${id}'})<-[r:RELTYPE]-(b {correo: '${id2}'}) DELETE r`) 
    result = await session.run(`MATCH (a {correo: '${id}'}), (b {correo: '${id2}'}) CREATE (a)-[r:friendship]->(b)`)
    result = await session.run(`MATCH (a {correo: '${id}'}), (b {correo: '${id2}'}) CREATE (a)<-[r:friendship]-(b)`) 
    
    const newData = []
    result.records.forEach(element => {
        newData.push(element._fields[0].properties);
    });
    return  newData
}

module.exports = {
    findById,
    findRequestById,
    AceptRequestById
}