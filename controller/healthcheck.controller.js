

import mongoose from "mongoose";

class HealthCheckController {

	constructor() {
		this.live = this.live.bind(this);
	}

	/**
	 * @typedef {Object} HealthCheck
	 * @property {Integer} uptime
	 * @property {String} message
	 * @property {String} timestamp
	 * @property {Number} connectionMongoDB
	 */

	/**
	 * @GET
	 * @param {Object} req
	 * @param {Object} res
	 * @returns {healthCheck} || { error: string }
	 */
	async live(req, res) {
		const healthcheck = {
			uptime: process.uptime(),
			message: 'OK',
			timestamp: new Date().toISOString(),
			connectionMongoDB: mongoose.connection.readyState,
			APP_URL: process.env.APP_URL,
		};

		try {
			if (healthcheck.connectionMongoDB !== 1) {
				let messageError;
				switch (healthcheck.connectionMongoDB) {
					case 0: messageError = 'disconnected MongoDB'; break;
					case 2: messageError = 'connecting MongoDB'; break;
					case 3: messageError = 'disconnecting MongoDB'; break;
				}
				throw Error(messageError);
			}


			res.send(healthcheck);
		} catch (e) {
			healthcheck.message = e.message;
			res.status(503).send(healthcheck);
		}
	}
}

export const healthCheckController = new HealthCheckController();
