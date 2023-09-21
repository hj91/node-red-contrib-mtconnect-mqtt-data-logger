# node-red-contrib-mtconnect-mqtt-data-logger

A Node-RED node designed for processing and formatting data from MTConnect MQTT Agents. This node parses the incoming MQTT message and transforms it into a `{MQTT Topic: Value}` format, suitable for input to the InfluxDB node. Once stored in InfluxDB, users can visualize the parameter data using Grafana.

## Installation

```bash
npm install node-red-contrib-mtconnect-mqtt-data-logger
```

## Usage

1. Connect the output of your MQTT node (configured for the MTConnect MQTT Agent) to the input of the `MTConnectMQTTAgent_DataLogger` node.
2. Connect the output of the `MTConnectMQTTAgent_DataLogger` node to the input of the InfluxDB node.
3. Store and visualize the data in Grafana.

## Grafana Dashboard

You can find a pre-configured Grafana dashboard JSON in this repository. Import this JSON to your Grafana instance for a ready-to-use dashboard tailored for this data.

## Features

- Parse MTConnect MQTT Agent data.
- Convert data to `{MQTT Topic: Value}` format. This node will create seperate measurements for every MQTT Topic.
- Seamless integration with InfluxDB and Grafana.

## Issues & Feedback

If you encounter any issues or would like to provide feedback, please open an issue [here](https://github.com/hj91/node-red-contrib-mtconnect-mqtt-data-logger/issues).

## Author

Harshad Joshi ([github.com/hj91](https://github.com/hj91))

## License

This project is licensed under the GPL-3.0 License. See the [LICENSE](LICENSE) file for details.

## Important Note

This node is in experimental stage - while it can log data correctly - certain things can get changed in next versions as per user feedback. All trademarks are acknowledged as property of their repective owners.
