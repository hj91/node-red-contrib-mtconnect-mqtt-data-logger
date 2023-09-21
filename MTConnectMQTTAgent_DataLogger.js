/**

 node-red-contrib-mtconnect-mqtt-data-logger/MTConnectMQTTAgent_DataLogger.js - Copyright 2023 Harshad Joshi and Bufferstack.IO Analytics Technology LLP, Pune

 Licensed under the GNU General Public License, Version 3.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 https://www.gnu.org/licenses/gpl-3.0.html

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 **/

module.exports = function(RED) {
    function MTConnectMQTTAgent_DataLogger(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        node.on('input', function(msg) {
            try {
                // Assume that the data is coming from an MTConnect MQTT Agent

                // Validate msg.topic and msg.payload.value
                if (!msg.topic || !msg.payload || typeof msg.payload.value === 'undefined') {
                    throw new Error("Missing topic or payload value");
                }

                // Extract msg.topic and msg.payload.value
                var topic = msg.topic;
                var payloadValue = msg.payload.value;

                // Create an array and attach it to msg.payload
                msg.payload = [topic, payloadValue];

                // Convert the array to JSON format
                var payloadJson = {
                    payload: String(msg.payload[0]),
                    payload2: String(msg.payload[1])
                };

                msg.payload = payloadJson;
                msg.measurement = topic;

                // Send the output
                node.send(msg);
            } catch (err) {
                // Report the error using Node-RED's error method
                node.error(err.message, msg);
            }
        });
    }

    RED.nodes.registerType("MTConnectMQTTAgent_DataLogger", MTConnectMQTTAgent_DataLogger);
};

