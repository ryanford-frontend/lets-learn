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
				el.appendChild(svg["path"]("M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18", {["fill"]: "#FFCC4D",["d"]: "M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18",}));el.appendChild(svg["path"]("M18 21.5c-9.333 0-10.485 8.354-10.496 8.438-.021.171.046.34.179.449.09.074.203.113.317.113.053 0 .106-.009.158-.025.059-.02 5.968-1.975 9.842-1.975 5.595 0 9.745 1.933 9.786 1.952.161.077.358.06.507-.047.147-.107.226-.286.203-.468C28.485 29.854 27.333 21.5 18 21.5zM29 10c-5.554 0-7.802-4.367-7.895-4.553-.247-.494-.047-1.095.447-1.342.493-.246 1.092-.048 1.34.443C22.967 4.694 24.713 8 29 8c.553 0 1 .448 1 1s-.447 1-1 1zM7 10c-.552 0-1-.448-1-1s.448-1 1-1c5.083 0 5.996-3.12 6.033-3.253.145-.528.692-.848 1.219-.709.53.139.851.673.718 1.205C14.921 5.437 13.704 10 7 10z", {["fill"]: "#664500",["d"]: "M18 21.5c-9.333 0-10.485 8.354-10.496 8.438-.021.171.046.34.179.449.09.074.203.113.317.113.053 0 .106-.009.158-.025.059-.02 5.968-1.975 9.842-1.975 5.595 0 9.745 1.933 9.786 1.952.161.077.358.06.507-.047.147-.107.226-.286.203-.468C28.485 29.854 27.333 21.5 18 21.5zM29 10c-5.554 0-7.802-4.367-7.895-4.553-.247-.494-.047-1.095.447-1.342.493-.246 1.092-.048 1.34.443C22.967 4.694 24.713 8 29 8c.553 0 1 .448 1 1s-.447 1-1 1zM7 10c-.552 0-1-.448-1-1s.448-1 1-1c5.083 0 5.996-3.12 6.033-3.253.145-.528.692-.848 1.219-.709.53.139.851.673.718 1.205C14.921 5.437 13.704 10 7 10z",}));el.appendChild(svg["path"]("M18 23c4 0 6 2 6 2H12s2-2 6-2z", {["fill"]: "#CCD6DD",["d"]: "M18 23c4 0 6 2 6 2H12s2-2 6-2z",}));el.appendChild(svg["path"]("M6.001 19c-.304 0-.604-.138-.801-.4-.332-.441-.242-1.068.2-1.399.143-.107 2.951-2.183 6.856-2.933C9.781 13.027 7.034 13 6.999 13c-.552-.002-.999-.45-.998-1.002 0-.551.447-.998.999-.998.221 0 5.452.038 8.707 3.293.286.286.372.716.217 1.09-.155.373-.52.617-.924.617-4.613 0-8.363 2.772-8.4 2.8-.18.135-.391.2-.599.2zm23.998-.001c-.208 0-.418-.064-.598-.198C29.363 18.772 25.59 16 21 16c-.404 0-.77-.244-.924-.617-.155-.374-.069-.804.217-1.09C23.549 11.038 28.779 11 29 11c.552 0 .998.447.999.998.001.552-.446 1-.997 1.002-.036 0-2.783.027-5.258 1.268 3.905.75 6.713 2.826 6.855 2.933.441.331.531.956.201 1.398-.196.261-.496.4-.801.4z", {["fill"]: "#664500",["d"]: "M6.001 19c-.304 0-.604-.138-.801-.4-.332-.441-.242-1.068.2-1.399.143-.107 2.951-2.183 6.856-2.933C9.781 13.027 7.034 13 6.999 13c-.552-.002-.999-.45-.998-1.002 0-.551.447-.998.999-.998.221 0 5.452.038 8.707 3.293.286.286.372.716.217 1.09-.155.373-.52.617-.924.617-4.613 0-8.363 2.772-8.4 2.8-.18.135-.391.2-.599.2zm23.998-.001c-.208 0-.418-.064-.598-.198C29.363 18.772 25.59 16 21 16c-.404 0-.77-.244-.924-.617-.155-.374-.069-.804.217-1.09C23.549 11.038 28.779 11 29 11c.552 0 .998.447.999.998.001.552-.446 1-.997 1.002-.036 0-2.783.027-5.258 1.268 3.905.75 6.713 2.826 6.855 2.933.441.331.531.956.201 1.398-.196.261-.496.4-.801.4z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};