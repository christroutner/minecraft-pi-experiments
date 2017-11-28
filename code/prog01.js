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

.then(mc => {
  mc_connection = mc; // Pass the handle to the server.


})

.then(() => {
  mc_connection.chat('...program is finished.');
  mc_connection.end();
})

.catch(err => {
  mc_connection.chat('...program crashed!');
  mc_connection.end();
  console.error('Error: ',err);
});
