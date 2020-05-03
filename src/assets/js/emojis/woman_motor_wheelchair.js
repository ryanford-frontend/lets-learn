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
				el.appendChild(svg["path"]("M8.22 28.583s.108-.118.211-.409c.104-.291.147-.888.133-.98-.014-.092-.039-.164-.148-.171-.083-.006-.768.08-1.145-.039-.699-.22-.812-.957-.812-.957s-.46.083-.829.152c-.368.069-.818.209-1.134.274-.271.056-.548.03-.823-.03-.275-.06-.485-.147-.55-.165-.066-.017-.575-.27-.782.25l-.051.154s.811.718 2.114 1.182c1.303.464 1.639.152 2.481.452.843.3 1.335.287 1.335.287z", {["fill"]: "#292F33",["d"]: "M8.22 28.583s.108-.118.211-.409c.104-.291.147-.888.133-.98-.014-.092-.039-.164-.148-.171-.083-.006-.768.08-1.145-.039-.699-.22-.812-.957-.812-.957s-.46.083-.829.152c-.368.069-.818.209-1.134.274-.271.056-.548.03-.823-.03-.275-.06-.485-.147-.55-.165-.066-.017-.575-.27-.782.25l-.051.154s.811.718 2.114 1.182c1.303.464 1.639.152 2.481.452.843.3 1.335.287 1.335.287z",}));el.appendChild(svg["path"]("M6.243 28.821c-.038-.07-.043-.253-.083-.292-.04-.039-.577-.11-.83-.137-.253-.027-.687-.076-1.158-.244-.471-.168-1.032-.523-1.375-.752-.343-.228-.594-.46-.646-.526s-.026-.078-.011-.107.119-.176.119-.176.196.213.569.459.754.467 1.458.717c.703.25 1.182.303 1.583.335.499.039 1.207.141 1.681.309.365.13.66.114.768.123.025.002.04.027.032.051l-.222.623c-.014.041-.081.121-.196.105s-1.651-.419-1.689-.488z", {["fill"]: "#292F33",["d"]: "M6.243 28.821c-.038-.07-.043-.253-.083-.292-.04-.039-.577-.11-.83-.137-.253-.027-.687-.076-1.158-.244-.471-.168-1.032-.523-1.375-.752-.343-.228-.594-.46-.646-.526s-.026-.078-.011-.107.119-.176.119-.176.196.213.569.459.754.467 1.458.717c.703.25 1.182.303 1.583.335.499.039 1.207.141 1.681.309.365.13.66.114.768.123.025.002.04.027.032.051l-.222.623c-.014.041-.081.121-.196.105s-1.651-.419-1.689-.488z",}));el.appendChild(svg["path"]("M25.097 17.21c.069 1.432-.391 2.922-1.505 3.202-1.066.268-3.056-.151-3.056-.151s-.698.408-.531 1.189c.095.444.257.67.201.712-.05.038-.486-.022-.684-.032-.528-.027-1.1-.211-2.073-.484-.974-.273-1.421-.285-2.481-.577-1.175-.324-1.986-.835-2.33-1.956-.293-.956.277-2.123 1.654-2.63 1.12-.412 4.288.195 5.488.311 1.201.118 5.257-.829 5.317.416z", {["fill"]: "#4289C1",["d"]: "M25.097 17.21c.069 1.432-.391 2.922-1.505 3.202-1.066.268-3.056-.151-3.056-.151s-.698.408-.531 1.189c.095.444.257.67.201.712-.05.038-.486-.022-.684-.032-.528-.027-1.1-.211-2.073-.484-.974-.273-1.421-.285-2.481-.577-1.175-.324-1.986-.835-2.33-1.956-.293-.956.277-2.123 1.654-2.63 1.12-.412 4.288.195 5.488.311 1.201.118 5.257-.829 5.317.416z",}));el.appendChild(svg["path"]("M7.127 27.177c-.646-.143-1.069-.49-1.426-1.025 1.678-1.899 3.787-7.307 3.787-7.307.695-1.744 1.62-2.914 3.252-2.851 2.317.089 5.748.535 5.748.535 2.276.329.671.789 1.305 1.693.635.903-1.294 1.99-2.786 1.891-2.602-.173-3.877-.453-5.522.846-.8 2.306-2.071 4.087-2.844 6.406-.489.079-.868-.045-1.514-.188z", {["fill"]: "#4289C1",["d"]: "M7.127 27.177c-.646-.143-1.069-.49-1.426-1.025 1.678-1.899 3.787-7.307 3.787-7.307.695-1.744 1.62-2.914 3.252-2.851 2.317.089 5.748.535 5.748.535 2.276.329.671.789 1.305 1.693.635.903-1.294 1.99-2.786 1.891-2.602-.173-3.877-.453-5.522.846-.8 2.306-2.071 4.087-2.844 6.406-.489.079-.868-.045-1.514-.188z",}));el.appendChild(svg["path"]("M24.879.905c-1.341-.8-3.695-.439-4.23 1.193-.531 1.621-.487 4.307 1 4.389 1.559.086 3.185.011 4.064-1.464.88-1.474.507-3.318-.834-4.118z", {["fill"]: "#FFDC5D",["d"]: "M24.879.905c-1.341-.8-3.695-.439-4.23 1.193-.531 1.621-.487 4.307 1 4.389 1.559.086 3.185.011 4.064-1.464.88-1.474.507-3.318-.834-4.118z",}));el.appendChild(svg["path"]("M25.24 5.363c2.488-2.108-2.576-2.694-2.576-2.694-.957-.122-.563 1.57-1.152 2.362-.405.548.834 1.078.834 1.078s.594.089.508.813l-.001.007c-.023.184-.078.399-.211.676-.662 1.37 1.127 2.571 1.789 1.198.262-.544.279-1.056.27-1.534l-.001-.042c-.015-.712-.076-1.343.54-1.864z", {["fill"]: "#FFDC5D",["d"]: "M25.24 5.363c2.488-2.108-2.576-2.694-2.576-2.694-.957-.122-.563 1.57-1.152 2.362-.405.548.834 1.078.834 1.078s.594.089.508.813l-.001.007c-.023.184-.078.399-.211.676-.662 1.37 1.127 2.571 1.789 1.198.262-.544.279-1.056.27-1.534l-.001-.042c-.015-.712-.076-1.343.54-1.864z",}));el.appendChild(svg["path"]("M26.422 1.752C25.651.478 24.415-.201 22.023.298c-2.089.436-1.714 2.102-1.212 1.91 1.382-.528 2.116.237 2.589 1.369.27-.473 1.143-.648 1.189.117.051.859-.778 1.094-.712 1.337.022.082-.028-.075 0 0 .35.945 1.106 1.348 1.106 1.348s.283.169.969-.766c.684-.934 1.235-2.595.47-3.861z", {["fill"]: "#FFAC33",["d"]: "M26.422 1.752C25.651.478 24.415-.201 22.023.298c-2.089.436-1.714 2.102-1.212 1.91 1.382-.528 2.116.237 2.589 1.369.27-.473 1.143-.648 1.189.117.051.859-.778 1.094-.712 1.337.022.082-.028-.075 0 0 .35.945 1.106 1.348 1.106 1.348s.283.169.969-.766c.684-.934 1.235-2.595.47-3.861z",}));el.appendChild(svg["path"]("M25.843 2.713c1.875.677.661 2.73.665 3.791.004 1.306 1.158 1.604 1.158 1.604s-.331-.74-.045-1.649c.397-1.26 1.797-2.079 1.069-3.475-.927-1.783-4.012-.692-2.847-.271z", {["fill"]: "#FFAC33",["d"]: "M25.843 2.713c1.875.677.661 2.73.665 3.791.004 1.306 1.158 1.604 1.158 1.604s-.331-.74-.045-1.649c.397-1.26 1.797-2.079 1.069-3.475-.927-1.783-4.012-.692-2.847-.271z",}));el.appendChild(svg["path"]("M25.778 16.257c-.214 1.304-.659 2.456-.696 3.032-.02.32-.939-.237-1.604-.511-1.782-.735-3.317-1.825-3.317-1.825.398-1.193.696-3.032.149-5.268-.477-1.953 3.106-5.252 4.309-4.634 1.573.807 2.382 1.782 1.904 4.684l-.745 4.522z", {["fill"]: "#9268CA",["d"]: "M25.778 16.257c-.214 1.304-.659 2.456-.696 3.032-.02.32-.939-.237-1.604-.511-1.782-.735-3.317-1.825-3.317-1.825.398-1.193.696-3.032.149-5.268-.477-1.953 3.106-5.252 4.309-4.634 1.573.807 2.382 1.782 1.904 4.684l-.745 4.522z",}));el.appendChild(svg["path"]("M27.811 10.609l.425-5.242c.022-.274.265-.48.539-.458.274.022.48.265.458.539l-.425 5.242c-.022.274-.265.48-.539.458-.274-.022-.48-.265-.458-.539z", {["fill"]: "#66757F",["d"]: "M27.811 10.609l.425-5.242c.022-.274.265-.48.539-.458.274.022.48.265.458.539l-.425 5.242c-.022.274-.265.48-.539.458-.274-.022-.48-.265-.458-.539z",}));el.appendChild(svg["path"]("M16 21v2s-2 0-2 2v3c0 1 1 2 2 2h10c1 0 2-1 2-2v-5c0-1-1-2-2-2H16z", {["fill"]: "#292F33",["d"]: "M16 21v2s-2 0-2 2v3c0 1 1 2 2 2h10c1 0 2-1 2-2v-5c0-1-1-2-2-2H16z",}));el.appendChild(svg["path"]("M22.956 22.559l-9.848-1.736c-.985-.174-.985-.174-.811-1.158.096-.542.617-.907 1.158-.811l9.848 1.736c.542.096.907.617.811 1.158-.173.985-.173.985-1.158.811z", {["fill"]: "#292F33",["d"]: "M22.956 22.559l-9.848-1.736c-.985-.174-.985-.174-.811-1.158.096-.542.617-.907 1.158-.811l9.848 1.736c.542.096.907.617.811 1.158-.173.985-.173.985-1.158.811z",}));el.appendChild(svg["path"]("M25.238 19.023c-.193.922-.557 1.827-2.094 1.537-1.537-.29-1.782 1.225-.824 1.493.958.267 3.252.646 3.921-.446.668-1.092.78-2.139.713-2.606s-1.572-.66-1.716.022z", {["fill"]: "#292F33",["d"]: "M25.238 19.023c-.193.922-.557 1.827-2.094 1.537-1.537-.29-1.782 1.225-.824 1.493.958.267 3.252.646 3.921-.446.668-1.092.78-2.139.713-2.606s-1.572-.66-1.716.022z",}));el.appendChild(svg["path"]("M23.442 22.896l-10.833-1.91c-.271-.048-.453-.308-.406-.579.048-.271.308-.453.579-.406l10.833 1.91c.271.048.453.308.406.579-.048.271-.309.454-.579.406z", {["fill"]: "#DD2E44",["d"]: "M23.442 22.896l-10.833-1.91c-.271-.048-.453-.308-.406-.579.048-.271.308-.453.579-.406l10.833 1.91c.271.048.453.308.406.579-.048.271-.309.454-.579.406z",}));el.appendChild(svg["path"]("M28.932 9.642l-1.736 9.848c-.174.985-.174.985-1.158.811-.542-.096-.907-.617-.811-1.158l1.736-9.848c.096-.542.617-.907 1.158-.811.984.173.984.173.811 1.158zm.992-7.49l-.713 4.025c-.087.493-.168 1.007-1.153.834-.542-.096-.882-.715-.763-1.398l.639-3.609c.163-.579.626-1.004 1.167-.909.985.173.91.564.823 1.057z", {["fill"]: "#292F33",["d"]: "M28.932 9.642l-1.736 9.848c-.174.985-.174.985-1.158.811-.542-.096-.907-.617-.811-1.158l1.736-9.848c.096-.542.617-.907 1.158-.811.984.173.984.173.811 1.158zm.992-7.49l-.713 4.025c-.087.493-.168 1.007-1.153.834-.542-.096-.882-.715-.763-1.398l.639-3.609c.163-.579.626-1.004 1.167-.909.985.173.91.564.823 1.057z",}));el.appendChild(svg["path"]("M29.406 9.224l-1.91 10.833c-.048.271-.308.453-.579.406-.271-.048-.453-.308-.406-.579l1.91-10.833c.048-.271.308-.453.579-.406.272.048.454.308.406.579zm1.243-7.455l-.91 5.18c-.048.271-.308.453-.579.406-.271-.048-.453-.308-.406-.579l.91-5.18c.048-.271.308-.453.579-.406.271.047.454.308.406.579z", {["fill"]: "#DD2E44",["d"]: "M29.406 9.224l-1.91 10.833c-.048.271-.308.453-.579.406-.271-.048-.453-.308-.406-.579l1.91-10.833c.048-.271.308-.453.579-.406.272.048.454.308.406.579zm1.243-7.455l-.91 5.18c-.048.271-.308.453-.579.406-.271-.048-.453-.308-.406-.579l.91-5.18c.048-.271.308-.453.579-.406.271.047.454.308.406.579z",}));el.appendChild(svg["path"]("M25.494 18.441l-7.466-1.316c-.747-.132-.747-.132-.617-.869.071-.405.466-.678.877-.606l7.466 1.316c.411.072.688.463.617.869-.13.738-.13.738-.877.606z", {["fill"]: "#292F33",["d"]: "M25.494 18.441l-7.466-1.316c-.747-.132-.747-.132-.617-.869.071-.405.466-.678.877-.606l7.466 1.316c.411.072.688.463.617.869-.13.738-.13.738-.877.606z",}));el.appendChild(svg["path"]("M23.123 21.824c.993.175 2.954.521 3.475-2.433s1.506-2.781.985.174-2.237 3.667-4.634 3.245c-1.969-.348-1.796-1.333.174-.986zm-10.33-1.821c1.971.34 2.277 1.422.308 1.07-.873-.156-.984.212-1.251.958-.252.702-.611 1.757-1.144 3.23-.391 1.082-1.279.603-.95-.342.551-1.588 1.061-2.968 1.392-3.847.338-.895.613-1.247 1.645-1.069z", {["fill"]: "#DD2E44",["d"]: "M23.123 21.824c.993.175 2.954.521 3.475-2.433s1.506-2.781.985.174-2.237 3.667-4.634 3.245c-1.969-.348-1.796-1.333.174-.986zm-10.33-1.821c1.971.34 2.277 1.422.308 1.07-.873-.156-.984.212-1.251.958-.252.702-.611 1.757-1.144 3.23-.391 1.082-1.279.603-.95-.342.551-1.588 1.061-2.968 1.392-3.847.338-.895.613-1.247 1.645-1.069z",}));el.appendChild(svg["path"]("M10.62 24.01c-.258-.094-.547.04-.641.299l-2.052 5.638c-.094.258.04.547.299.641.258.094.547-.04.641-.299l2.052-5.638c.094-.259-.041-.547-.299-.641z", {["fill"]: "#DD2E44",["d"]: "M10.62 24.01c-.258-.094-.547.04-.641.299l-2.052 5.638c-.094.258.04.547.299.641.258.094.547-.04.641-.299l2.052-5.638c.094-.259-.041-.547-.299-.641z",}));el.appendChild(svg["path"]("M8.226 30.588L4.467 29.22c-.258-.094-.393-.382-.299-.641.094-.258.382-.393.641-.299l3.759 1.368c.258.094.393.382.299.641-.094.258-.383.393-.641.299z", {["fill"]: "#66757F",["d"]: "M8.226 30.588L4.467 29.22c-.258-.094-.393-.382-.299-.641.094-.258.382-.393.641-.299l3.759 1.368c.258.094.393.382.299.641-.094.258-.383.393-.641.299z",}));el.appendChild(svg["path"]("M13.844 30.862l2.95-2.95c.194-.194.194-.513 0-.707-.194-.194-.513-.194-.707 0l-2.95 2.95c-.194.194-.194.513 0 .707.194.194.512.194.707 0zM32 34c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1s1 .45 1 1v3c0 .55-.45 1-1 1z", {["fill"]: "#DD2E44",["d"]: "M13.844 30.862l2.95-2.95c.194-.194.194-.513 0-.707-.194-.194-.513-.194-.707 0l-2.95 2.95c-.194.194-.194.513 0 .707.194.194.512.194.707 0zM32 34c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1s1 .45 1 1v3c0 .55-.45 1-1 1z",}));el.appendChild(svg["path"]("M13.5 34c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1s1 .45 1 1v3c0 .55-.45 1-1 1zm12.983-6.005h2c.275 0 .5-.225.5-.5s-.225-.5-.5-.5h-2c-.275 0-.5.225-.5.5s.225.5.5.5z", {["fill"]: "#DD2E44",["d"]: "M13.5 34c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1s1 .45 1 1v3c0 .55-.45 1-1 1zm12.983-6.005h2c.275 0 .5-.225.5-.5s-.225-.5-.5-.5h-2c-.275 0-.5.225-.5.5s.225.5.5.5z",}));el.appendChild(svg["path"]("M31.123 30.803l-2.95-2.95c-.194-.194-.194-.513 0-.707.194-.194.513-.194.707 0l2.95 2.95c.194.194.194.513 0 .707-.194.195-.512.195-.707 0z", {["fill"]: "#DD2E44",["d"]: "M31.123 30.803l-2.95-2.95c-.194-.194-.194-.513 0-.707.194-.194.513-.194.707 0l2.95 2.95c.194.194.194.513 0 .707-.194.195-.512.195-.707 0z",}));el.appendChild(svg["path"]("M11.672 16.127c.742.318 2.05.936 2.339 1.047 0 0 .134-.891.49-.891 0 0 .134-.468.223-.668s.356-.134.379.245c.022.379-.089.512-.089.512s.334.423.134 1.002c0 0 .446.067.356.624-.089.557.067.98-.334 1.092-.401.111-1.916.535-1.938-.067-.022-.601-.401-1.069-1.136-1.515-.735-.446-1.27-.936-1.181-1.181.088-.244.133-.467.757-.2z", {["fill"]: "#292F33",["d"]: "M11.672 16.127c.742.318 2.05.936 2.339 1.047 0 0 .134-.891.49-.891 0 0 .134-.468.223-.668s.356-.134.379.245c.022.379-.089.512-.089.512s.334.423.134 1.002c0 0 .446.067.356.624-.089.557.067.98-.334 1.092-.401.111-1.916.535-1.938-.067-.022-.601-.401-1.069-1.136-1.515-.735-.446-1.27-.936-1.181-1.181.088-.244.133-.467.757-.2z",}));el.appendChild(svg["path"]("M26.5 25h-11c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h11c.275 0 .5.225.5.5s-.225.5-.5.5z", {["fill"]: "#DD2E44",["d"]: "M26.5 25h-11c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h11c.275 0 .5.225.5.5s-.225.5-.5.5z",}));el.appendChild(svg["path"]("M22.691 10.276c-.579 1.455-.982 3.884-1.237 3.894-1.473.062-3.222.614-4.149.559-.672-.04-1.306-.167-1.651-.05-.552.187-1.159.289-1.351.632-.195.348.171.657 1.035.656.635 0 1.045.208 1.674.06.896-.21 4.492.479 5.665-.345.554-.389 1.272-1.95 2.356-4.742-1.084-.476-2.342-.664-2.342-.664z", {["fill"]: "#FFDC5D",["d"]: "M22.691 10.276c-.579 1.455-.982 3.884-1.237 3.894-1.473.062-3.222.614-4.149.559-.672-.04-1.306-.167-1.651-.05-.552.187-1.159.289-1.351.632-.195.348.171.657 1.035.656.635 0 1.045.208 1.674.06.896-.21 4.492.479 5.665-.345.554-.389 1.272-1.95 2.356-4.742-1.084-.476-2.342-.664-2.342-.664z",}));el.appendChild(svg["circle"](21.5, 31.5, 9, {["cy"]: "31.5",["r"]: "4.5",["fill"]: "#66757F",["cx"]: "21.5",}));el.appendChild(svg["circle"](13.5, 33.5, 5, {["cy"]: "33.5",["r"]: "2.5",["fill"]: "#66757F",["cx"]: "13.5",}));el.appendChild(svg["circle"](32, 34, 4, {["cy"]: "34",["r"]: "2",["fill"]: "#66757F",["cx"]: "32",}));el.appendChild(svg["circle"](21.5, 31.5, 5, {["cy"]: "31.5",["r"]: "2.5",["fill"]: "#CCD6DD",["cx"]: "21.5",}));el.appendChild(svg["circle"](13.5, 33.5, 3, {["cy"]: "33.5",["r"]: "1.5",["fill"]: "#CCD6DD",["cx"]: "13.5",}));el.appendChild(svg["circle"](32, 34, 2, {["cy"]: "34",["r"]: "1",["fill"]: "#292F33",["cx"]: "32",}));el.appendChild(svg["circle"](22, 30.634, 1, {["cy"]: "30.634",["fill"]: "#292F33",["cx"]: "22",["r"]: ".5",}));el.appendChild(svg["circle"](21, 32.366, 1, {["cy"]: "32.366",["fill"]: "#292F33",["cx"]: "21",["r"]: ".5",}));el.appendChild(svg["circle"](20.634, 31, 1, {["cy"]: "31",["fill"]: "#292F33",["cx"]: "20.634",["r"]: ".5",}));el.appendChild(svg["circle"](22.366, 32, 1, {["cy"]: "32",["fill"]: "#292F33",["cx"]: "22.366",["r"]: ".5",}));el.appendChild(svg["circle"](13.5, 33.5, 1.5, {["cy"]: "33.5",["r"]: ".75",["fill"]: "#292F33",["cx"]: "13.5",}));el.appendChild(svg["circle"](32, 34, 1, {["cy"]: "34",["r"]: ".5",["fill"]: "#66757F",["cx"]: "32",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};