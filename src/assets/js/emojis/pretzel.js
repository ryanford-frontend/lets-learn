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
				el.appendChild(svg["path"]("M35 16c0-8-6-11-12-11-1.738 0-3.472.371-5 1.097C16.472 5.371 14.738 5 13 5 7 5 1 8 1 16c0 3 1.314 5.662 3 8 .434.602.903 1.146 1.4 1.647-.357.603-.616 1.091-.779 1.353C4 28 5 29 6 29c.69 0 1.205-.617 1.745-1.482C10.552 29.273 14.023 30 18 30s7.448-.727 10.255-2.482C28.795 28.383 29.31 29 30 29c1 0 2-1 1.379-2-.163-.262-.422-.75-.779-1.353.497-.501.967-1.046 1.4-1.647 1.686-2.338 3-5 3-8zm-17 1.207C16.578 15.736 17 14 17 14c0-.708.381-1.414 1-2.034.619.62 1 1.326 1 2.034 0 0 .422 1.736-1 3.207zM8.215 19.94C6.59 17.687 6.204 15.388 7 13c1.053-3.158 4.85-3 6-3 .288 0 .576.024.861.059C13.314 11.185 13 12.498 13 14c0 1.476.578 3.273 1.951 4.799-.298.075-.61.144-.951.201-1.907.318-3.471 1.122-4.745 2.107-.375-.355-.73-.736-1.04-1.167zM18 24c-2.296 0-4.476-.394-6.324-1.266.657-.372 1.415-.642 2.324-.734 1.565-.157 2.885-.524 4-1.024 1.115.5 2.435.867 4 1.024.909.092 1.667.362 2.324.734C22.476 23.606 20.296 24 18 24zm9.785-4.06c-.311.431-.665.812-1.04 1.167C25.471 20.122 23.906 19.318 22 19c-.341-.057-.653-.126-.95-.201C22.422 17.273 23 15.476 23 14c0-1.502-.313-2.815-.861-3.941.285-.035.573-.059.861-.059 1.15 0 4.947-.158 6 3 .796 2.388.41 4.687-1.215 6.94z", {["fill"]: "#F4900C",["d"]: "M35 16c0-8-6-11-12-11-1.738 0-3.472.371-5 1.097C16.472 5.371 14.738 5 13 5 7 5 1 8 1 16c0 3 1.314 5.662 3 8 .434.602.903 1.146 1.4 1.647-.357.603-.616 1.091-.779 1.353C4 28 5 29 6 29c.69 0 1.205-.617 1.745-1.482C10.552 29.273 14.023 30 18 30s7.448-.727 10.255-2.482C28.795 28.383 29.31 29 30 29c1 0 2-1 1.379-2-.163-.262-.422-.75-.779-1.353.497-.501.967-1.046 1.4-1.647 1.686-2.338 3-5 3-8zm-17 1.207C16.578 15.736 17 14 17 14c0-.708.381-1.414 1-2.034.619.62 1 1.326 1 2.034 0 0 .422 1.736-1 3.207zM8.215 19.94C6.59 17.687 6.204 15.388 7 13c1.053-3.158 4.85-3 6-3 .288 0 .576.024.861.059C13.314 11.185 13 12.498 13 14c0 1.476.578 3.273 1.951 4.799-.298.075-.61.144-.951.201-1.907.318-3.471 1.122-4.745 2.107-.375-.355-.73-.736-1.04-1.167zM18 24c-2.296 0-4.476-.394-6.324-1.266.657-.372 1.415-.642 2.324-.734 1.565-.157 2.885-.524 4-1.024 1.115.5 2.435.867 4 1.024.909.092 1.667.362 2.324.734C22.476 23.606 20.296 24 18 24zm9.785-4.06c-.311.431-.665.812-1.04 1.167C25.471 20.122 23.906 19.318 22 19c-.341-.057-.653-.126-.95-.201C22.422 17.273 23 15.476 23 14c0-1.502-.313-2.815-.861-3.941.285-.035.573-.059.861-.059 1.15 0 4.947-.158 6 3 .796 2.388.41 4.687-1.215 6.94z",}));el.appendChild(svg["path"]("M11.751 22.764c-.794.448-1.78 1.172-2.376 2.236-.688 1.229-1.218 2.033-1.584 2.544.335.207.679.402 1.032.581.353-.692.878-1.653 1.552-2.688.768-1.179 1.902-1.912 2.489-2.238-.381-.131-.756-.269-1.113-.435zm11.692-.434l-.005.002c.314.114.611.247.886.402-.19.09-.399.153-.597.233.564.415 1.348 1.092 1.96 2.032.74 1.136 1.377 2.218 1.797 2.952.26-.14.521-.278.771-.435.188.3.372.567.562.792 0 0-.562-.792-2.004-3.31s-3.37-2.668-3.37-2.668zm-2.393-3.531c.05-.055.09-.112.138-.168-.568.444-1.34 1.055-2.023 1.622-.358.297-.763.531-1.161.724.401.18.839.335 1.296.477.524-.293 1.157-.698 1.701-1.204.56-.521.892-.92 1.081-1.23-.029-.005-.054-.015-.082-.02-.341-.057-.653-.126-.95-.201zm-2.467-6.088c.732-.612 2.127-1.524 3.951-1.669-.109-.324-.233-.637-.376-.935-.583.091-1.385.249-2.158.518-.877.305-1.58.914-1.998 1.344.235.236.423.486.581.742z", {["fill"]: "#AD5810",["d"]: "M11.751 22.764c-.794.448-1.78 1.172-2.376 2.236-.688 1.229-1.218 2.033-1.584 2.544.335.207.679.402 1.032.581.353-.692.878-1.653 1.552-2.688.768-1.179 1.902-1.912 2.489-2.238-.381-.131-.756-.269-1.113-.435zm11.692-.434l-.005.002c.314.114.611.247.886.402-.19.09-.399.153-.597.233.564.415 1.348 1.092 1.96 2.032.74 1.136 1.377 2.218 1.797 2.952.26-.14.521-.278.771-.435.188.3.372.567.562.792 0 0-.562-.792-2.004-3.31s-3.37-2.668-3.37-2.668zm-2.393-3.531c.05-.055.09-.112.138-.168-.568.444-1.34 1.055-2.023 1.622-.358.297-.763.531-1.161.724.401.18.839.335 1.296.477.524-.293 1.157-.698 1.701-1.204.56-.521.892-.92 1.081-1.23-.029-.005-.054-.015-.082-.02-.341-.057-.653-.126-.95-.201zm-2.467-6.088c.732-.612 2.127-1.524 3.951-1.669-.109-.324-.233-.637-.376-.935-.583.091-1.385.249-2.158.518-.877.305-1.58.914-1.998 1.344.235.236.423.486.581.742z",}));el.appendChild(svg["circle"](7, 22, 2, {["cy"]: "22",["fill"]: "#FFE8B6",["cx"]: "7",["r"]: "1",}));el.appendChild(svg["circle"](3, 14, 2, {["cy"]: "14",["fill"]: "#FFE8B6",["cx"]: "3",["r"]: "1",}));el.appendChild(svg["circle"](6, 11, 2, {["cy"]: "11",["fill"]: "#FFE8B6",["cx"]: "6",["r"]: "1",}));el.appendChild(svg["circle"](12, 7, 2, {["cy"]: "7",["fill"]: "#FFE8B6",["cx"]: "12",["r"]: "1",}));el.appendChild(svg["circle"](14, 27, 2, {["cy"]: "27",["fill"]: "#FFE8B6",["cx"]: "14",["r"]: "1",}));el.appendChild(svg["circle"](21, 26, 2, {["cy"]: "26",["fill"]: "#FFE8B6",["cx"]: "21",["r"]: "1",}));el.appendChild(svg["circle"](25, 27, 2, {["cy"]: "27",["fill"]: "#FFE8B6",["cx"]: "25",["r"]: "1",}));el.appendChild(svg["circle"](31, 17, 2, {["cy"]: "17",["fill"]: "#FFE8B6",["cx"]: "31",["r"]: "1",}));el.appendChild(svg["circle"](31, 9, 2, {["cy"]: "9",["fill"]: "#FFE8B6",["cx"]: "31",["r"]: "1",}));el.appendChild(svg["circle"](22, 8, 2, {["cy"]: "8",["fill"]: "#FFE8B6",["cx"]: "22",["r"]: "1",}));el.appendChild(svg["circle"](19, 9, 2, {["cy"]: "9",["fill"]: "#FFE8B6",["cx"]: "19",["r"]: "1",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};