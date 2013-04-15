require('lo');
var Db = require('./lib/db').Db,
    db = Db.init();




var c = db.getCollection('testFind', {
    source  :   './tests/data.json',
    type    :   'fileJSON'
});
module.exports = db;

/*
console.inspect(
    c.find({'systemProperties.createdOn': {$not: {$in: [1364826904804, 1364826904808, 1364826904805]}}})
        .subCollection('arr')
        .find({'key':{$nor:['bsd', 'asd']}})
//        .find({$where: "this.key === 'absd'"})
        .toArray()
//        .data
);
*/
/*
console.inspect(
    c.find({'systemProperties.createdOn': {$in: [1364826904803, 1364826904808, 1364826904805]}})
        .subCollection('systemProperties').find({tenant: {$exists: false}}, {tenant:1})
        .toArray()
);
*/
/*
console.inspect(c.find({$and:[{'systemProperties.createdOn': {$gte: 1364826904803}}, {'systemProperties.createdOn': {$lte: 1364826904804}}]}).toArray());
*/
/*
console.inspect(c.find(
    {
        $and: [
            {
                'systemProperties.createdOn': {
                    $gt: 1364826904802,
                    $lte: 1364826904809
                }
            },
            {
                'systemProperties.tenant': {
                    $or: [
                        {
                            $exists: true
                        },


                        {
                            $exists: false
                        }

                    ]
                }
            }
        ],
        name: {
            $and:[
                {
                    $regex: 'co'
                },
                {
                    $type: 2
                }
            ]
        }
    },
    {
        'systemProperties':1, 
        name:1
    },
    {
        limit: 300
    }
).toArray());
*/
//console.inspect(c.find({$and:[{'systemProperties.createdOn' :{$or:[1364826904803, 1364826904808]}}, {'arr.key':'absd'}]}).toArray());
//console.inspect(c.find({'arr.key': 'csd'}).toArray());
//console.inspect(c.find({'sdasdasd': 'csd'}).toArray());

/*
    c.update({'systemProperties.createdOn' :{$in:[1364826904803, 1364826904808]}}, 
        {
            $set: {group: 'RelationshipType', 'systemProperties.tenant': 'dell'},
            $inc: {'systemProperties.createdOn':1000}
        }, {}, function() {
        console.inspect(c.find({'systemProperties.createdOn' :{$in:[1364826905803, 1364826905808]}}).toArray());
    });
*/
/*
var z = db.getCollection('test');
z.save({hello: []});
z.update({},{$pushAll: {hello: [{test: 'ok!'}, 'pipka', {my: {name: ['is', 'vovik']}}]}}, {sync: true});
console.inspect(z.find().toArray());
z.update({},{$pullAll: {hello: [{'my.name': 'vovik'}, 'pipka']}}, {sync: true});
console.inspect(z.find().toArray());
*/

var test = db.getCollection('test');
test.save({_id: 'index1', name: 'hello1'});
test.save({_id: 'index1', name: 'hello2'});
test.save({_id: 'index3', name: 'hello3'});
//console.inspect(test.find({$or: [{_id: 'index1', name: 'hello2'}, {_id: 'index3'}]}).toArray());

//console.inspect(test._index);
test.update({_id: 'index2'}, {$set: {_id: 'index1'}}, {sync: true});
//test.remove({_id: 'index3'}, {sync: true});
console.inspect(test.find({_id: 'index3'}).toArray());
//console.inspect(test.findOne({_id: 'index3'}));
//test.remove({_id:})