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
				el.appendChild(svg["path"]("M32.636 6.56l-4.652 1.498 1.475-4.651-4.642 1.485.453-1.395-.389-.126-.544 1.676-1.857.598.697-2.148-.388-.126-.788 2.428-2.923.941.125.388 2.643-.851-.605 1.863-2.627.848.125.388 2.347-.757-.604 1.861-3.137 1.013.125.388.519-.167-.608 1.872-2.284.739.125.388 2.003-.648-.61 1.879-2.36.766.126.388 2.078-.675-.604 1.86-1.6.52.126.388 1.319-.428-.759 2.34 2.34-.759-.428 1.319.388.126.519-1.601 1.86-.604-.674 2.078.389.126.766-2.36 1.878-.61-.648 2.003.389.125.739-2.284 2.349-.762.755-2.338 1.861-.604-.757 2.347.389.125.848-2.627 1.862-.604-.851 2.644.389.125.941-2.924 2.427-.788-.125-.388-2.148.697.598-1.859 1.675-.544-.125-.388-1.396.453 1.485-4.667zm-.614.623l-.598 1.859-1.857.601.6-1.861 1.855-.599zm-2.334.753l-.601 1.861-1.859.602.601-1.863 1.859-.6zm-4.678 1.51l-.603 1.866-1.868.604.606-1.868 1.865-.602zm-1.711.124l.604-1.861 1.862-.601-.602 1.86-1.864.602zm2.19-.278l1.862-.601-.602 1.863-1.864.603.604-1.865zm-1.237 2.498l-.605 1.87-1.872.608.608-1.873 1.869-.605zm-2.194.282l-1.859.602.607-1.87 1.859-.6-.607 1.868zm-.155.478l-.608 1.874-1.86.604.609-1.876 1.859-.602zm-.764 2.353l-.604 1.86-1.86.604.604-1.86 1.86-.604zm.48-.156l1.872-.608-.601 1.86-1.875.608.604-1.86zm2.352-.764l1.867-.606-.6 1.859-1.868.606.601-1.859zm.155-.478l.605-1.87 1.865-.603-.603 1.867-1.867.606zm2.948-2.628l1.859-.602-.602 1.864-1.86.604.603-1.866zm.431-2.664l-1.862.601.602-1.86 1.861-.6-.601 1.859zm1.354-4.194l-.599 1.856-1.86.6.601-1.858 1.858-.598zm-2.337.752l-.601 1.859-1.862.601.604-1.861 1.859-.599zm-4.198 1.352l1.858-.598-.604 1.861-1.859.6.605-1.863zm-.759 2.341l1.859-.6-.604 1.861-1.859.6.604-1.861zm-3.097 3.094l1.859-.6-.607 1.87-1.859.602.607-1.872zm-.763 2.35l1.859-.601-.609 1.876-1.86.604.61-1.879zm-.765 2.358l1.86-.604-.604 1.86-1.86.604.604-1.86zm-1.364 4.2l.604-1.861 1.86-.604-.604 1.861-1.86.604zm2.34-.76l.604-1.861 1.86-.604-.604 1.861-1.86.604zm2.34-.759l.604-1.861 1.875-.609-.602 1.86-1.877.61zm4.227-1.372l-1.87.607.602-1.86 1.869-.606-.601 1.859zm1.234-2.494l.6-1.859 1.86-.604-.6 1.859-1.86.604zm4.202-1.364l-1.862.604.6-1.859 1.86-.604-.598 1.859zm.752-2.337l-1.86.604.601-1.864 1.858-.6-.599 1.86z", {["fill"]: "#292F33",["d"]: "M32.636 6.56l-4.652 1.498 1.475-4.651-4.642 1.485.453-1.395-.389-.126-.544 1.676-1.857.598.697-2.148-.388-.126-.788 2.428-2.923.941.125.388 2.643-.851-.605 1.863-2.627.848.125.388 2.347-.757-.604 1.861-3.137 1.013.125.388.519-.167-.608 1.872-2.284.739.125.388 2.003-.648-.61 1.879-2.36.766.126.388 2.078-.675-.604 1.86-1.6.52.126.388 1.319-.428-.759 2.34 2.34-.759-.428 1.319.388.126.519-1.601 1.86-.604-.674 2.078.389.126.766-2.36 1.878-.61-.648 2.003.389.125.739-2.284 2.349-.762.755-2.338 1.861-.604-.757 2.347.389.125.848-2.627 1.862-.604-.851 2.644.389.125.941-2.924 2.427-.788-.125-.388-2.148.697.598-1.859 1.675-.544-.125-.388-1.396.453 1.485-4.667zm-.614.623l-.598 1.859-1.857.601.6-1.861 1.855-.599zm-2.334.753l-.601 1.861-1.859.602.601-1.863 1.859-.6zm-4.678 1.51l-.603 1.866-1.868.604.606-1.868 1.865-.602zm-1.711.124l.604-1.861 1.862-.601-.602 1.86-1.864.602zm2.19-.278l1.862-.601-.602 1.863-1.864.603.604-1.865zm-1.237 2.498l-.605 1.87-1.872.608.608-1.873 1.869-.605zm-2.194.282l-1.859.602.607-1.87 1.859-.6-.607 1.868zm-.155.478l-.608 1.874-1.86.604.609-1.876 1.859-.602zm-.764 2.353l-.604 1.86-1.86.604.604-1.86 1.86-.604zm.48-.156l1.872-.608-.601 1.86-1.875.608.604-1.86zm2.352-.764l1.867-.606-.6 1.859-1.868.606.601-1.859zm.155-.478l.605-1.87 1.865-.603-.603 1.867-1.867.606zm2.948-2.628l1.859-.602-.602 1.864-1.86.604.603-1.866zm.431-2.664l-1.862.601.602-1.86 1.861-.6-.601 1.859zm1.354-4.194l-.599 1.856-1.86.6.601-1.858 1.858-.598zm-2.337.752l-.601 1.859-1.862.601.604-1.861 1.859-.599zm-4.198 1.352l1.858-.598-.604 1.861-1.859.6.605-1.863zm-.759 2.341l1.859-.6-.604 1.861-1.859.6.604-1.861zm-3.097 3.094l1.859-.6-.607 1.87-1.859.602.607-1.872zm-.763 2.35l1.859-.601-.609 1.876-1.86.604.61-1.879zm-.765 2.358l1.86-.604-.604 1.86-1.86.604.604-1.86zm-1.364 4.2l.604-1.861 1.86-.604-.604 1.861-1.86.604zm2.34-.76l.604-1.861 1.86-.604-.604 1.861-1.86.604zm2.34-.759l.604-1.861 1.875-.609-.602 1.86-1.877.61zm4.227-1.372l-1.87.607.602-1.86 1.869-.606-.601 1.859zm1.234-2.494l.6-1.859 1.86-.604-.6 1.859-1.86.604zm4.202-1.364l-1.862.604.6-1.859 1.86-.604-.598 1.859zm.752-2.337l-1.86.604.601-1.864 1.858-.6-.599 1.86z",}));el.appendChild(svg["path"]("M1.277 35.899c-.298 0-.596-.114-.824-.341-.455-.455-.455-1.192 0-1.647l11.678-11.678c.455-.454 1.192-.454 1.647 0 .455.455.455 1.192 0 1.647L2.101 35.559c-.228.227-.526.34-.824.34z", {["fill"]: "#CCD6DD",["d"]: "M1.277 35.899c-.298 0-.596-.114-.824-.341-.455-.455-.455-1.192 0-1.647l11.678-11.678c.455-.454 1.192-.454 1.647 0 .455.455.455 1.192 0 1.647L2.101 35.559c-.228.227-.526.34-.824.34z",}));el.appendChild(svg["path"]("M27.783 17.28l-1.473-.229c.331-2.125-.304-4.169-1.741-5.608-1.438-1.437-3.478-2.076-5.608-1.742l-.229-1.472c2.598-.405 5.112.382 6.89 2.16 1.778 1.779 2.565 4.291 2.161 6.891z", {["fill"]: "#292F33",["d"]: "M27.783 17.28l-1.473-.229c.331-2.125-.304-4.169-1.741-5.608-1.438-1.437-3.478-2.076-5.608-1.742l-.229-1.472c2.598-.405 5.112.382 6.89 2.16 1.778 1.779 2.565 4.291 2.161 6.891z",}));el.appendChild(svg["path"]("M30.558 16.604l-1.477-.194c.351-2.659-.515-5.249-2.372-7.106-1.857-1.858-4.452-2.722-7.105-2.373l-.195-1.477c3.126-.412 6.167.607 8.354 2.796 2.187 2.188 3.207 5.232 2.795 8.354z", {["fill"]: "#292F33",["d"]: "M30.558 16.604l-1.477-.194c.351-2.659-.515-5.249-2.372-7.106-1.857-1.858-4.452-2.722-7.105-2.373l-.195-1.477c3.126-.412 6.167.607 8.354 2.796 2.187 2.188 3.207 5.232 2.795 8.354z",}));el.appendChild(svg["path"]("M33.386 15.219l-1.484-.134c.265-2.932-.819-5.848-2.973-8.001-2.154-2.154-5.07-3.232-8.002-2.974l-.135-1.483c3.375-.304 6.789.901 9.256 3.369 2.467 2.466 3.641 5.85 3.338 9.223z", {["fill"]: "#292F33",["d"]: "M33.386 15.219l-1.484-.134c.265-2.932-.819-5.848-2.973-8.001-2.154-2.154-5.07-3.232-8.002-2.974l-.135-1.483c3.375-.304 6.789.901 9.256 3.369 2.467 2.466 3.641 5.85 3.338 9.223z",}));el.appendChild(svg["path"]("M32.53 3.481c-3.026-3.025-7.951-5.17-11.871-1.25-1.468 1.467-1.742 2.914-2.033 4.445-.396 2.083-.845 4.445-4.431 8.031-1.691 1.691-1.774 3.066-1.848 4.279-.059.964-.109 1.797-.899 2.918-.209.296-.174.7.082.956l1.624 1.624c.145.144.335.218.527.218.149 0 .3-.044.429-.136 1.12-.79 1.953-.84 2.917-.899 1.213-.074 2.587-.157 4.278-1.848 3.587-3.586 5.948-4.035 8.032-4.431 1.531-.291 2.978-.565 4.444-2.033 3.92-3.922 1.777-8.847-1.251-11.874zm-3.471 12.441c-2.182.415-4.896.93-8.807 4.841-.185.185-.36.339-.531.477-1.086.258-2.598.261-3.904-1.045s-1.304-2.818-1.045-3.904c.138-.17.292-.345.476-.53 3.911-3.911 4.426-6.625 4.841-8.807.278-1.467.479-2.526 1.622-3.669.261-.261.524-.486.79-.68 2.958.286 5.35 1.361 7.48 3.427 2.132 2.068 3.18 4.787 3.424 7.478-.194.266-.416.53-.677.791-1.143 1.141-2.203 1.343-3.669 1.621z", {["fill"]: "#AAB8C2",["d"]: "M32.53 3.481c-3.026-3.025-7.951-5.17-11.871-1.25-1.468 1.467-1.742 2.914-2.033 4.445-.396 2.083-.845 4.445-4.431 8.031-1.691 1.691-1.774 3.066-1.848 4.279-.059.964-.109 1.797-.899 2.918-.209.296-.174.7.082.956l1.624 1.624c.145.144.335.218.527.218.149 0 .3-.044.429-.136 1.12-.79 1.953-.84 2.917-.899 1.213-.074 2.587-.157 4.278-1.848 3.587-3.586 5.948-4.035 8.032-4.431 1.531-.291 2.978-.565 4.444-2.033 3.92-3.922 1.777-8.847-1.251-11.874zm-3.471 12.441c-2.182.415-4.896.93-8.807 4.841-.185.185-.36.339-.531.477-1.086.258-2.598.261-3.904-1.045s-1.304-2.818-1.045-3.904c.138-.17.292-.345.476-.53 3.911-3.911 4.426-6.625 4.841-8.807.278-1.467.479-2.526 1.622-3.669.261-.261.524-.486.79-.68 2.958.286 5.35 1.361 7.48 3.427 2.132 2.068 3.18 4.787 3.424 7.478-.194.266-.416.53-.677.791-1.143 1.141-2.203 1.343-3.669 1.621z",}));el.appendChild(svg["circle"](24.937, 28.875, 6.8, {["cy"]: "28.875",["r"]: "3.4",["fill"]: "#CCD6DD",["cx"]: "24.937",}));el.appendChild(svg["circle"](25.604, 1.797, 2.208, {["cy"]: "1.797",["r"]: "1.104",["fill"]: "#FFF",["cx"]: "25.604",}));el.appendChild(svg["circle"](29.26, 3.562, 2.208, {["cy"]: "3.562",["r"]: "1.104",["fill"]: "#FFF",["cx"]: "29.26",}));el.appendChild(svg["circle"](32.401, 6.75, 2.208, {["cy"]: "6.75",["r"]: "1.104",["fill"]: "#FFF",["cx"]: "32.401",}));el.appendChild(svg["circle"](34.214, 10.375, 2.208, {["cy"]: "10.375",["r"]: "1.104",["fill"]: "#FFF",["cx"]: "34.214",}));el.appendChild(svg["path"]("M25.085 4.306c-.055 0-.11-.007-.165-.022-.331-.091-.524-.433-.434-.764l.395-1.426c.092-.33.438-.522.764-.433.331.091.524.433.434.764l-.395 1.426c-.077.275-.327.455-.599.455zm3.021 1.487c-.123 0-.248-.037-.357-.114-.279-.198-.347-.585-.148-.865l.845-1.196c.197-.279.583-.348.865-.149.279.198.347.585.148.865l-.845 1.196c-.121.172-.312.263-.508.263zm4.219 5.753c-.272 0-.521-.18-.598-.455-.092-.33.102-.672.432-.764l1.426-.395c.333-.089.673.103.764.433.092.33-.102.672-.432.764l-1.426.395c-.055.015-.111.022-.166.022zm-1.512-3.048c-.195 0-.387-.091-.508-.262-.198-.28-.131-.667.148-.865l1.195-.845c.282-.2.668-.13.865.148.198.28.131.667-.148.865l-1.195.845c-.109.077-.234.114-.357.114z", {["fill"]: "#292F33",["d"]: "M25.085 4.306c-.055 0-.11-.007-.165-.022-.331-.091-.524-.433-.434-.764l.395-1.426c.092-.33.438-.522.764-.433.331.091.524.433.434.764l-.395 1.426c-.077.275-.327.455-.599.455zm3.021 1.487c-.123 0-.248-.037-.357-.114-.279-.198-.347-.585-.148-.865l.845-1.196c.197-.279.583-.348.865-.149.279.198.347.585.148.865l-.845 1.196c-.121.172-.312.263-.508.263zm4.219 5.753c-.272 0-.521-.18-.598-.455-.092-.33.102-.672.432-.764l1.426-.395c.333-.089.673.103.764.433.092.33-.102.672-.432.764l-1.426.395c-.055.015-.111.022-.166.022zm-1.512-3.048c-.195 0-.387-.091-.508-.262-.198-.28-.131-.667.148-.865l1.195-.845c.282-.2.668-.13.865.148.198.28.131.667-.148.865l-1.195.845c-.109.077-.234.114-.357.114z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};