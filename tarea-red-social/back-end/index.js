// const express = require('express');
// const app = express();

// const neo4j = require('neo4j-driver')

// const driver = neo4j.driver('bolt://localhost', neo4j.auth.basic(user, password))
// const session = driver.session()

// try {
//   const result = await session.run(
//     'CREATE (a:Person {name: $name}) RETURN a',
//     { name: personName }
//   )

//   const singleRecord = result.records[0]
//   const node = singleRecord.get(0)

//   console.log(node.properties.name)
// } finally {
//   await session.close()
// }

// app.listen(5000);
// console.log('Server Started on Port 5000')
// module.exports = app;

const express = require('express');
const app = express();
const port = 3000;

const neo4j = require('neo4j-driver')
const driver = neo4j.driver("bolt://localhost:7687", neo4j.auth.basic("neo4j", "1234"))
const session = driver.session()

app.get('/', function(req, res){
    session.run('MATCH(n) RETURN n')
            .then(function(result){
                result.records.forEach(function(record){
                    console.log(record._fields[0].properties);
                });
            })
            .catch(function(err){
                console.log(err);
            });
    res.send('Funca');

});
module.exports = app;
app.listen(3000, () => console.log('Example app is listening on port 3000.'));