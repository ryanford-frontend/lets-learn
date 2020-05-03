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
				el.appendChild(svg["path"]("M35 21H1c-.552 0-1-.447-1-1s.448-1 1-1h34c.553 0 1 .447 1 1s-.447 1-1 1zm-22.177-2l-.069-.002c-.092-.007-9.214-.714-10.734-8.235-.109-.542.241-1.069.782-1.178.543-.113 1.069.241 1.178.782 1.221 6.044 8.833 6.631 8.91 6.636.551.038.967.515.93 1.066-.036.527-.476.931-.997.931zM3 31c-.142 0-.286-.03-.423-.094-.5-.234-.716-.829-.482-1.33 3.166-6.77 11.038-7.721 11.372-7.758.548-.056 1.042.334 1.103.882.062.548-.332 1.043-.88 1.106-.071.008-7.099.876-9.783 6.617-.171.364-.532.577-.907.577zm19.753-12c-.522 0-.961-.405-.996-.934-.036-.551.381-1.027.931-1.064.081-.005 8.116-.617 9.332-6.636.108-.541.633-.895 1.179-.782.541.109.892.637.782 1.178-1.521 7.525-10.769 8.21-11.162 8.235l-.066.003zm10.248 12c-.377 0-.737-.213-.907-.576-2.694-5.763-10.124-6.609-10.198-6.617-.55-.058-.948-.55-.89-1.099.058-.55.555-.952 1.099-.89.352.037 8.634.983 11.802 7.758.233.501.018 1.096-.482 1.33-.139.064-.282.094-.424.094z", {["d"]: "M35 21H1c-.552 0-1-.447-1-1s.448-1 1-1h34c.553 0 1 .447 1 1s-.447 1-1 1zm-22.177-2l-.069-.002c-.092-.007-9.214-.714-10.734-8.235-.109-.542.241-1.069.782-1.178.543-.113 1.069.241 1.178.782 1.221 6.044 8.833 6.631 8.91 6.636.551.038.967.515.93 1.066-.036.527-.476.931-.997.931zM3 31c-.142 0-.286-.03-.423-.094-.5-.234-.716-.829-.482-1.33 3.166-6.77 11.038-7.721 11.372-7.758.548-.056 1.042.334 1.103.882.062.548-.332 1.043-.88 1.106-.071.008-7.099.876-9.783 6.617-.171.364-.532.577-.907.577zm19.753-12c-.522 0-.961-.405-.996-.934-.036-.551.381-1.027.931-1.064.081-.005 8.116-.617 9.332-6.636.108-.541.633-.895 1.179-.782.541.109.892.637.782 1.178-1.521 7.525-10.769 8.21-11.162 8.235l-.066.003zm10.248 12c-.377 0-.737-.213-.907-.576-2.694-5.763-10.124-6.609-10.198-6.617-.55-.058-.948-.55-.89-1.099.058-.55.555-.952 1.099-.89.352.037 8.634.983 11.802 7.758.233.501.018 1.096-.482 1.33-.139.064-.282.094-.424.094z",["fill"]: "#31373D",}));el.appendChild(svg["path"]("M24.989 7.766c-.069-2.626-1.277-4.216-3.095-5.04C21.961 2.5 22 2.257 22 2c0-1.105-.672-2-1.5-2S19 .895 19 2c0 .015.003.028.003.043C18.675 2.017 18.342 2 18 2s-.675.017-1.003.043c0-.015.003-.028.003-.043 0-1.105-.671-2-1.5-2S14 .895 14 2c0 .257.04.5.106.726-1.817.824-3.025 2.414-3.095 5.04C7.98 9.551 6 12.662 6 17c0 7.159 5.373 16.923 12 16.923 6.628 0 12-9.764 12-16.923 0-4.338-1.98-7.45-5.011-9.234z", {["fill"]: "#31373D",["d"]: "M24.989 7.766c-.069-2.626-1.277-4.216-3.095-5.04C21.961 2.5 22 2.257 22 2c0-1.105-.672-2-1.5-2S19 .895 19 2c0 .015.003.028.003.043C18.675 2.017 18.342 2 18 2s-.675.017-1.003.043c0-.015.003-.028.003-.043 0-1.105-.671-2-1.5-2S14 .895 14 2c0 .257.04.5.106.726-1.817.824-3.025 2.414-3.095 5.04C7.98 9.551 6 12.662 6 17c0 7.159 5.373 16.923 12 16.923 6.628 0 12-9.764 12-16.923 0-4.338-1.98-7.45-5.011-9.234z",}));el.appendChild(svg["path"]("M16.001 34.959C9.564 34.364 4.5 28.064 4.5 20.378 4.5 12.693 9.564 9.597 16 9c.33-.03 1-.046 1 2.294v22.541c0 1.171-.669 1.156-.999 1.124zm3.998 0c6.436-.595 11.501-6.895 11.501-14.581C31.5 12.693 26.435 9.597 20 9c-.33-.03-1-.046-1 2.294v22.541c0 1.171.67 1.156.999 1.124z", {["fill"]: "#DD2E44",["d"]: "M16.001 34.959C9.564 34.364 4.5 28.064 4.5 20.378 4.5 12.693 9.564 9.597 16 9c.33-.03 1-.046 1 2.294v22.541c0 1.171-.669 1.156-.999 1.124zm3.998 0c6.436-.595 11.501-6.895 11.501-14.581C31.5 12.693 26.435 9.597 20 9c-.33-.03-1-.046-1 2.294v22.541c0 1.171.67 1.156.999 1.124z",}));el.appendChild(svg["circle"](13, 15, 4, {["cy"]: "15",["fill"]: "#31373D",["cx"]: "13",["r"]: "2",}));el.appendChild(svg["circle"](10, 22, 6, {["cy"]: "22",["fill"]: "#31373D",["cx"]: "10",["r"]: "3",}));el.appendChild(svg["circle"](13, 29, 4, {["cy"]: "29",["fill"]: "#31373D",["cx"]: "13",["r"]: "2",}));el.appendChild(svg["circle"](24.5, 14.5, 5, {["cy"]: "14.5",["fill"]: "#31373D",["cx"]: "24.5",["r"]: "2.5",}));el.appendChild(svg["circle"](22.5, 20.5, 3, {["cy"]: "20.5",["fill"]: "#31373D",["cx"]: "22.5",["r"]: "1.5",}));el.appendChild(svg["circle"](28, 23, 4, {["cy"]: "23",["fill"]: "#31373D",["cx"]: "28",["r"]: "2",}));el.appendChild(svg["circle"](24, 29, 6, {["cy"]: "29",["fill"]: "#31373D",["cx"]: "24",["r"]: "3",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};