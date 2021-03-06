var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var path = require('path');
// var db = require('./index.js');

var sequelize = new Sequelize({dialect: 'mysql', use_env_variable: 'mysql://sns50ozpeq2bzyee:fcr9oxq0ebi06774@p1us8ottbqwio8hv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/p4809kjzew03ne4r'});

var model = sequelize.import(path.join(__dirname, 'black-card'));
sequelize['BlackCard'] = model;

var arrayOfCards = [{
"text": "In the seventh circle of Hell, sinners must endure ____ for all eternity."
},
{
"text": "After months of practice with ____, I think I'm finally ready for ____."
},
{
"text": "The blind date was going horribly until we discovered our shared interest in ____."
},
{
"text": "____. Awesome in theory, kind of a mess in practice."
},
{
"text": "With enough time and pressure, ____ will turn into ____."
},
{
"text": "I'm not like the rest of you. I'm too rich and busy for ____."
},
{
"text": "And what did <i>you</i> bring for show and tell?"
},
{
"text": "Having problems with ____? Try ____!"
},
{
"text": "As part of his contract, Prince won't perform without ____ in his dressing room."
},
{
"text": "How did I lose my virginity?"
},
{
"text": "Here is the church<br>Here is the steeple<br>Open the doors<br>And there is ____."
},
{
"text": "During his childhood, Salvador Dalí produced hundreds of paintings of ____."
},
{
"text": "In 1,000 years, when paper money is a distant memory, how will we pay for goods and services?"
},
{
"text": "What don't you want to find in your Kung Pao chicken?"
},
{
"text": "The Smithsonian Museum of Natural History has just opened an exhibit on ____."
}];
sequelize.BlackCard.bulkCreate(arrayOfCards, ["text"]);