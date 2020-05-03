import { h } from "/assets/js/vendor/hyperapp.js";
import rough from "/assets/js/vendor/rough.js";
import uuid from "/assets/js/vendor/uuid.js";

export default (props = {}) => {
	let proto;
	const new_props = {
		...props,
		key: props.key || uuid(),
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "-1 -1 37 37",
		width: (props.size || 1) * 16,
		height: (props.size || 1) * 16,
		oncreate: el => {
			const svg = rough.svg(el, {
				options: props.options || {
					roughness: 0.1,
					strokeWidth: 0.2,
					fillStyle: "solid",
				}
			});

			if (proto) {
				el.parentNode.replaceChild(proto.cloneNode(true), el);
			} else {
				el.appendChild(svg["path"]("M36 18c0 9.94-8.059 18-18 18S0 27.94 0 18C0 8.059 8.059 0 18 0s18 8.059 18 18z", {["fill"]: "#DD2E44",["d"]: "M36 18c0 9.94-8.059 18-18 18S0 27.94 0 18C0 8.059 8.059 0 18 0s18 8.059 18 18z",}));el.appendChild(svg["path"]("M14.002 12.155c.486 0 .756.351.756.891 0 .567-.27.945-.756.945h-2.457c.621 1.431 1.512 2.726 2.483 3.698.189.189.297.486.297.755 0 .243-.081.459-.216.621-.162.189-.378.297-.621.297s-.54-.135-.729-.378c-.54-.702-1.161-1.862-1.62-3.104.162 1.403.297 2.915.297 4.102v9.61c0 .513-.351.809-.972.809-.594 0-.917-.297-.917-.809v-8.907c0-1.404.216-2.943.405-4.211-.675 2.24-1.809 5.047-3.185 6.937-.216.297-.513.459-.837.459-.189 0-.378-.054-.54-.188-.27-.217-.405-.486-.405-.783 0-.216.081-.432.243-.647 1.835-2.295 3.266-5.48 3.995-8.26H6.309c-.486 0-.756-.378-.756-.945 0-.54.27-.891.756-.891h3.239v-3.51c-.837.189-1.701.351-2.484.459-.054.027-.107.027-.189.027-.459 0-.81-.27-.891-.836v-.162c0-.486.297-.837.729-.918 2.213-.297 4.643-.944 6.262-1.781.216-.108.432-.162.648-.162.351 0 .648.189.864.486.135.189.189.378.189.567 0 .324-.189.594-.54.756-.755.378-1.7.729-2.699 1.053v4.022h2.565zm4.588-.54c0-.486.405-.783 1.026-.783.566 0 .972.297.972.81v9.231c2.699-3.59 4.588-8.071 5.83-13.308.108-.459.405-.729.918-.729.081 0 .189 0 .324.027.539.108.863.54.863.972 0 .108 0 .189-.026.27-1.782 6.559-4.482 11.85-7.909 15.71v2.726c0 .648.189.918.863.999.459.054 1.025.081 1.863.081.836 0 1.457-.081 1.916-.189.54-.136.837-.324.998-.892.162-.566.298-1.565.324-2.807.027-.432.405-.81.999-.81h.054c.621.026.918.378.918.972v.081c-.054 1.511-.243 2.807-.566 3.697-.324.918-.999 1.485-2.105 1.701-.702.135-1.539.188-2.537.216-1.08 0-1.971-.054-2.673-.135-1.431-.189-2.051-.837-2.051-2.214v-1.943c-1.323 1.215-2.807 2.349-4.373 3.293-.243.162-.486.243-.702.243-.324 0-.621-.162-.783-.513-.135-.162-.189-.378-.189-.567 0-.351.162-.701.54-.918 2.025-1.133 3.86-2.618 5.507-4.291v-10.93zm-2.294 3.077c.054 0 .108 0 .189.027.567.081.837.432.837.918 0 .081 0 .162-.027.243-.27 2.483-.864 5.102-1.7 7.072-.216.405-.567.621-.945.621-.135 0-.297-.027-.432-.108-.378-.161-.54-.432-.54-.756 0-.188.054-.378.162-.594.81-1.862 1.35-4.237 1.62-6.64.053-.513.35-.783.836-.783zm7.153-6.289c.297.27.485.594.485.917 0 .189-.054.378-.189.54-.217.297-.566.459-.918.459-.27 0-.513-.081-.701-.243-1.108-.918-2.943-2.106-4.4-2.807-.297-.189-.486-.486-.486-.81 0-.162.054-.351.162-.513.216-.351.567-.513.918-.513.189 0 .378.054.567.135 1.511.676 3.428 1.836 4.562 2.835zm4.453 6.64c.378 0 .702.216.892.648.917 1.943 1.511 3.914 1.943 5.911.026.136.054.27.054.378 0 .432-.189.756-.675.918-.135.027-.269.054-.405.054-.404 0-.728-.243-.863-.81-.432-1.781-1.053-3.914-1.863-5.695-.08-.135-.107-.297-.107-.459 0-.351.189-.675.567-.837.16-.081.323-.108.457-.108z", {["fill"]: "#FFF",["d"]: "M14.002 12.155c.486 0 .756.351.756.891 0 .567-.27.945-.756.945h-2.457c.621 1.431 1.512 2.726 2.483 3.698.189.189.297.486.297.755 0 .243-.081.459-.216.621-.162.189-.378.297-.621.297s-.54-.135-.729-.378c-.54-.702-1.161-1.862-1.62-3.104.162 1.403.297 2.915.297 4.102v9.61c0 .513-.351.809-.972.809-.594 0-.917-.297-.917-.809v-8.907c0-1.404.216-2.943.405-4.211-.675 2.24-1.809 5.047-3.185 6.937-.216.297-.513.459-.837.459-.189 0-.378-.054-.54-.188-.27-.217-.405-.486-.405-.783 0-.216.081-.432.243-.647 1.835-2.295 3.266-5.48 3.995-8.26H6.309c-.486 0-.756-.378-.756-.945 0-.54.27-.891.756-.891h3.239v-3.51c-.837.189-1.701.351-2.484.459-.054.027-.107.027-.189.027-.459 0-.81-.27-.891-.836v-.162c0-.486.297-.837.729-.918 2.213-.297 4.643-.944 6.262-1.781.216-.108.432-.162.648-.162.351 0 .648.189.864.486.135.189.189.378.189.567 0 .324-.189.594-.54.756-.755.378-1.7.729-2.699 1.053v4.022h2.565zm4.588-.54c0-.486.405-.783 1.026-.783.566 0 .972.297.972.81v9.231c2.699-3.59 4.588-8.071 5.83-13.308.108-.459.405-.729.918-.729.081 0 .189 0 .324.027.539.108.863.54.863.972 0 .108 0 .189-.026.27-1.782 6.559-4.482 11.85-7.909 15.71v2.726c0 .648.189.918.863.999.459.054 1.025.081 1.863.081.836 0 1.457-.081 1.916-.189.54-.136.837-.324.998-.892.162-.566.298-1.565.324-2.807.027-.432.405-.81.999-.81h.054c.621.026.918.378.918.972v.081c-.054 1.511-.243 2.807-.566 3.697-.324.918-.999 1.485-2.105 1.701-.702.135-1.539.188-2.537.216-1.08 0-1.971-.054-2.673-.135-1.431-.189-2.051-.837-2.051-2.214v-1.943c-1.323 1.215-2.807 2.349-4.373 3.293-.243.162-.486.243-.702.243-.324 0-.621-.162-.783-.513-.135-.162-.189-.378-.189-.567 0-.351.162-.701.54-.918 2.025-1.133 3.86-2.618 5.507-4.291v-10.93zm-2.294 3.077c.054 0 .108 0 .189.027.567.081.837.432.837.918 0 .081 0 .162-.027.243-.27 2.483-.864 5.102-1.7 7.072-.216.405-.567.621-.945.621-.135 0-.297-.027-.432-.108-.378-.161-.54-.432-.54-.756 0-.188.054-.378.162-.594.81-1.862 1.35-4.237 1.62-6.64.053-.513.35-.783.836-.783zm7.153-6.289c.297.27.485.594.485.917 0 .189-.054.378-.189.54-.217.297-.566.459-.918.459-.27 0-.513-.081-.701-.243-1.108-.918-2.943-2.106-4.4-2.807-.297-.189-.486-.486-.486-.81 0-.162.054-.351.162-.513.216-.351.567-.513.918-.513.189 0 .378.054.567.135 1.511.676 3.428 1.836 4.562 2.835zm4.453 6.64c.378 0 .702.216.892.648.917 1.943 1.511 3.914 1.943 5.911.026.136.054.27.054.378 0 .432-.189.756-.675.918-.135.027-.269.054-.405.054-.404 0-.728-.243-.863-.81-.432-1.781-1.053-3.914-1.863-5.695-.08-.135-.107-.297-.107-.459 0-.351.189-.675.567-.837.16-.081.323-.108.457-.108z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};