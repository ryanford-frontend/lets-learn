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
				el.appendChild(svg["path"]("M23.013 24.322l-5.546-5.546-5.547-5.546S12.375 24.413.737 27.323c0 0 1.032 2.487 3.364 4.819s4.819 3.364 4.819 3.364c2.91-11.639 14.093-11.184 14.093-11.184z", {["fill"]: "#77B255",["d"]: "M23.013 24.322l-5.546-5.546-5.547-5.546S12.375 24.413.737 27.323c0 0 1.032 2.487 3.364 4.819s4.819 3.364 4.819 3.364c2.91-11.639 14.093-11.184 14.093-11.184z",}));el.appendChild(svg["path"]("M13.83 16.594c-.727 3.637-5.092 9.456-5.092 9.456l8.728-8.728c2.909-2.909-3.636-.728-3.636-.728zm12.365 6.546s-10.91.727-17.457 5.819c8.001-8.001 11.638-8.728 11.638-8.728l5.819 2.909z", {["fill"]: "#5C913B",["d"]: "M13.83 16.594c-.727 3.637-5.092 9.456-5.092 9.456l8.728-8.728c2.909-2.909-3.636-.728-3.636-.728zm12.365 6.546s-10.91.727-17.457 5.819c8.001-8.001 11.638-8.728 11.638-8.728l5.819 2.909z",}));el.appendChild(svg["path"]("M30.156 28.192c.667.045 1.348-.178 1.858-.688.937-.937.937-2.457 0-3.394-.085-.085-.18-.154-.274-.224.411-.101.802-.304 1.123-.625.311-.311.509-.688.613-1.084.396-.105.773-.302 1.084-.613.937-.937.937-2.457 0-3.394.937-.937.937-2.457 0-3.394-.352-.352-.786-.572-1.241-.659.43-.893.284-1.994-.456-2.735-.321-.321-.712-.524-1.123-.625.094-.07.189-.139.274-.224.937-.937.937-2.457 0-3.394-.741-.741-1.842-.887-2.735-.456-.088-.455-.307-.889-.659-1.241-.51-.51-1.191-.732-1.858-.688.045-.667-.178-1.348-.688-1.858-.937-.937-2.457-.937-3.394 0-.741-.741-1.842-.887-2.735-.456-.088-.455-.307-.889-.659-1.241-.937-.937-2.457-.937-3.394 0-.352.352-.572.786-.659 1.241-.893-.43-1.994-.284-2.735.456-.321.321-.524.712-.625 1.123-.07-.094-.139-.189-.224-.274-.937-.937-2.457-.937-3.394 0-.742.739-.888 1.84-.458 2.734-.455.087-.889.307-1.241.659-.937.937-.937 2.457 0 3.394.321.321.712.524 1.123.625-.094.07-.189.139-.274.224-.937.937-.937 2.457 0 3.394.352.352.786.572 1.241.659-.43.893-.284 1.994.456 2.735.741.741 1.842.887 2.735.456.088.455.307.889.659 1.241.321.321.712.524 1.123.625-.094.07-.189.139-.274.224-.937.937-.937 2.457 0 3.394.741.741 1.842.887 2.735.456.088.455.307.889.659 1.241.636.636 1.537.83 2.345.603.064.084.124.169.201.246.51.51 1.191.732 1.858.688-.045.667.178 1.348.688 1.858.937.937 2.457.937 3.394 0 .085-.085.154-.18.224-.274.101.411.304.802.625 1.123.937.937 2.457.937 3.394 0 .51-.51.732-1.191.688-1.858z", {["fill"]: "#3E721D",["d"]: "M30.156 28.192c.667.045 1.348-.178 1.858-.688.937-.937.937-2.457 0-3.394-.085-.085-.18-.154-.274-.224.411-.101.802-.304 1.123-.625.311-.311.509-.688.613-1.084.396-.105.773-.302 1.084-.613.937-.937.937-2.457 0-3.394.937-.937.937-2.457 0-3.394-.352-.352-.786-.572-1.241-.659.43-.893.284-1.994-.456-2.735-.321-.321-.712-.524-1.123-.625.094-.07.189-.139.274-.224.937-.937.937-2.457 0-3.394-.741-.741-1.842-.887-2.735-.456-.088-.455-.307-.889-.659-1.241-.51-.51-1.191-.732-1.858-.688.045-.667-.178-1.348-.688-1.858-.937-.937-2.457-.937-3.394 0-.741-.741-1.842-.887-2.735-.456-.088-.455-.307-.889-.659-1.241-.937-.937-2.457-.937-3.394 0-.352.352-.572.786-.659 1.241-.893-.43-1.994-.284-2.735.456-.321.321-.524.712-.625 1.123-.07-.094-.139-.189-.224-.274-.937-.937-2.457-.937-3.394 0-.742.739-.888 1.84-.458 2.734-.455.087-.889.307-1.241.659-.937.937-.937 2.457 0 3.394.321.321.712.524 1.123.625-.094.07-.189.139-.274.224-.937.937-.937 2.457 0 3.394.352.352.786.572 1.241.659-.43.893-.284 1.994.456 2.735.741.741 1.842.887 2.735.456.088.455.307.889.659 1.241.321.321.712.524 1.123.625-.094.07-.189.139-.274.224-.937.937-.937 2.457 0 3.394.741.741 1.842.887 2.735.456.088.455.307.889.659 1.241.636.636 1.537.83 2.345.603.064.084.124.169.201.246.51.51 1.191.732 1.858.688-.045.667.178 1.348.688 1.858.937.937 2.457.937 3.394 0 .085-.085.154-.18.224-.274.101.411.304.802.625 1.123.937.937 2.457.937 3.394 0 .51-.51.732-1.191.688-1.858z",}));el.appendChild(svg["circle"](10.92, 5.683, 3.086, {["cy"]: "5.683",["r"]: "1.543",["fill"]: "#5C913B",["cx"]: "10.92",}));el.appendChild(svg["circle"](15.285, 5.683, 3.086, {["cy"]: "5.683",["r"]: "1.543",["fill"]: "#5C913B",["cx"]: "15.285",}));el.appendChild(svg["circle"](18.194, 2.774, 3.086, {["cy"]: "2.774",["r"]: "1.543",["fill"]: "#5C913B",["cx"]: "18.194",}));el.appendChild(svg["circle"](21.831, 4.956, 3.086, {["cy"]: "4.956",["r"]: "1.543",["fill"]: "#5C913B",["cx"]: "21.831",}));el.appendChild(svg["circle"](24.74, 4.956, 3.086, {["cy"]: "4.956",["r"]: "1.543",["fill"]: "#5C913B",["cx"]: "24.74",}));el.appendChild(svg["circle"](25.468, 7.138, 3.086, {["cy"]: "7.138",["r"]: "1.543",["fill"]: "#5C913B",["cx"]: "25.468",}));el.appendChild(svg["circle"](27.65, 7.865, 3.086, {["cy"]: "7.865",["r"]: "1.543",["fill"]: "#5C913B",["cx"]: "27.65",}));el.appendChild(svg["circle"](30.559, 9.32, 3.086, {["cy"]: "9.32",["r"]: "1.543",["fill"]: "#5C913B",["cx"]: "30.559",}));el.appendChild(svg["circle"](29.832, 11.502, 3.086, {["cy"]: "11.502",["r"]: "1.543",["fill"]: "#5C913B",["cx"]: "29.832",}));el.appendChild(svg["circle"](32.014, 15.139, 3.086, {["cy"]: "15.139",["r"]: "1.543",["fill"]: "#5C913B",["cx"]: "32.014",}));el.appendChild(svg["circle"](32.741, 18.776, 3.086, {["cy"]: "18.776",["r"]: "1.543",["fill"]: "#5C913B",["cx"]: "32.741",}));el.appendChild(svg["circle"](26.922, 11.502, 3.086, {["cy"]: "11.502",["r"]: "1.543",["fill"]: "#5C913B",["cx"]: "26.922",}));el.appendChild(svg["circle"](24.013, 8.593, 3.086, {["cy"]: "8.593",["r"]: "1.543",["fill"]: "#5C913B",["cx"]: "24.013",}));el.appendChild(svg["circle"](20.376, 6.411, 3.086, {["cy"]: "6.411",["r"]: "1.543",["fill"]: "#5C913B",["cx"]: "20.376",}));el.appendChild(svg["circle"](16.012, 7.865, 3.086, {["cy"]: "7.865",["r"]: "1.543",["fill"]: "#5C913B",["cx"]: "16.012",}));el.appendChild(svg["circle"](17.467, 6.411, 3.086, {["cy"]: "6.411",["r"]: "1.543",["fill"]: "#5C913B",["cx"]: "17.467",}));el.appendChild(svg["circle"](13.102, 9.32, 3.086, {["cy"]: "9.32",["r"]: "1.543",["fill"]: "#5C913B",["cx"]: "13.102",}));el.appendChild(svg["circle"](20.376, 10.775, 3.086, {["cy"]: "10.775",["r"]: "1.543",["fill"]: "#5C913B",["cx"]: "20.376",}));el.appendChild(svg["circle"](25.468, 15.866, 3.086, {["cy"]: "15.866",["r"]: "1.543",["fill"]: "#5C913B",["cx"]: "25.468",}));el.appendChild(svg["circle"](26.922, 20.231, 3.086, {["cy"]: "20.231",["r"]: "1.543",["fill"]: "#5C913B",["cx"]: "26.922",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};