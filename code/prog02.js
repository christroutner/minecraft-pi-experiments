/**
 * minecraft-pi-promise tests.
 *
 * @package minecraft-pi-promise
 * @author Lars Gregori <lars.gregori@gmail.com>
 * https://github.com/choas/minecraft-pi-promise
 */

/**
 * Dependencies
 */
var test = require('tap').test;
var Minecraft = require('./../lib/minecraft.js');

var minecraft_server_name = '127.0.0.1';
var minecraft_server_port = 4711;

var mc_connection;

// Connect to Minecraft
new Minecraft(minecraft_server_name, minecraft_server_port, 'Program is starting...')

// Get the position of the user
.then(mc => {
  mc_connection = mc; // Pass the handle to the server.

  return mc.getPos();
})

.then(pos => {
  mc_connection.chat('Player position: '+pos);

  console.log(pos);

  var playerPos = pos.split(',');
  var x1 = Number(playerPos[0]);
  var z1 = Number(playerPos[1]);
  var y1 = Number(playerPos[2]);

  debugger;

  //return mc_connection.setBlock(x1+5,y1+5,z1,mc_connection.blocks['BLOCK_NAME']);

  //mc_connection.chat('getBlock: '+mc_connection.getBlock(x1+5,y1+5,z1));
  return mc_connection.getBlock(x1+5,y1+5,z1);
})

.then(val => {
  debugger;
  mc_connection.chat('getBlock: '+val);
})

.then(() => {
  debugger;
  mc_connection.chat('...program is finished.');
  mc_connection.end();
})

.catch(err => {
  debugger;
  mc_connection.chat('...program crashed!');
  mc_connection.end();
  console.error('Error: ',err);
});
