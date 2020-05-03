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
				el.appendChild(svg["path"]("M28.688 20.312C28.688 26.217 23.904 31 18 31c-5.903 0-10.688-4.783-10.688-10.688 0-5.903 4.786-10.689 10.688-10.689 5.904.001 10.688 4.786 10.688 10.689z", {["fill"]: "#6D6E71",["d"]: "M28.688 20.312C28.688 26.217 23.904 31 18 31c-5.903 0-10.688-4.783-10.688-10.688 0-5.903 4.786-10.689 10.688-10.689 5.904.001 10.688 4.786 10.688 10.689z",}));el.appendChild(svg["path"]("M26 33.5H10c-1.665 0-2.479-1.339-2.763-2.31l-2.664-.056c-.153-.003-.297-.077-.389-.2-.092-.122-.123-.281-.083-.43l.594-2.216-2.446-.651c-.152-.041-.276-.15-.335-.296s-.046-.311.035-.445l1.199-1.993-2.156-1.192c-.139-.077-.233-.216-.254-.374-.02-.157.036-.315.151-.426l1.729-1.647-1.729-1.646c-.115-.11-.171-.268-.151-.426.021-.158.115-.297.254-.374l2.156-1.194-1.2-1.994c-.081-.135-.094-.3-.035-.445.059-.146.183-.255.335-.296l2.446-.65-.594-2.218c-.04-.148-.009-.307.083-.43s.236-.196.39-.2l2.575-.053.058-2.302c.004-.149.074-.289.192-.381.118-.092.271-.127.416-.094l2.521.561.717-2.234c.045-.139.148-.251.282-.308.136-.056.288-.051.417.014l2.284 1.139 1.341-2.009c.08-.119.208-.199.35-.218.145-.019.287.024.394.119L18 7.258l1.88-1.636c.109-.094.251-.137.395-.118.143.019.269.099.35.218l1.34 2.009 2.286-1.139c.13-.065.283-.069.417-.014.135.057.237.169.282.308l.716 2.234 2.521-.561c.146-.032.298.002.416.094s.188.232.192.381l.058 2.302 2.574.053c.153.003.297.077.389.2.093.123.123.282.083.43l-.595 2.217 2.449.65c.152.04.276.15.336.296.059.146.046.311-.035.445l-1.201 1.994 2.155 1.194c.14.077.233.216.254.374s-.036.316-.151.426l-1.729 1.646 1.729 1.647c.115.11.172.269.151.426-.021.158-.114.297-.254.374L32.854 24.9l1.2 1.993c.081.135.094.3.035.445-.06.146-.184.255-.335.296l-2.45.651.595 2.216c.04.148.01.307-.082.43-.093.123-.236.197-.39.2l-2.663.056c-.285.974-1.099 2.313-2.764 2.313z", {["fill"]: "#662113",["d"]: "M26 33.5H10c-1.665 0-2.479-1.339-2.763-2.31l-2.664-.056c-.153-.003-.297-.077-.389-.2-.092-.122-.123-.281-.083-.43l.594-2.216-2.446-.651c-.152-.041-.276-.15-.335-.296s-.046-.311.035-.445l1.199-1.993-2.156-1.192c-.139-.077-.233-.216-.254-.374-.02-.157.036-.315.151-.426l1.729-1.647-1.729-1.646c-.115-.11-.171-.268-.151-.426.021-.158.115-.297.254-.374l2.156-1.194-1.2-1.994c-.081-.135-.094-.3-.035-.445.059-.146.183-.255.335-.296l2.446-.65-.594-2.218c-.04-.148-.009-.307.083-.43s.236-.196.39-.2l2.575-.053.058-2.302c.004-.149.074-.289.192-.381.118-.092.271-.127.416-.094l2.521.561.717-2.234c.045-.139.148-.251.282-.308.136-.056.288-.051.417.014l2.284 1.139 1.341-2.009c.08-.119.208-.199.35-.218.145-.019.287.024.394.119L18 7.258l1.88-1.636c.109-.094.251-.137.395-.118.143.019.269.099.35.218l1.34 2.009 2.286-1.139c.13-.065.283-.069.417-.014.135.057.237.169.282.308l.716 2.234 2.521-.561c.146-.032.298.002.416.094s.188.232.192.381l.058 2.302 2.574.053c.153.003.297.077.389.2.093.123.123.282.083.43l-.595 2.217 2.449.65c.152.04.276.15.336.296.059.146.046.311-.035.445l-1.201 1.994 2.155 1.194c.14.077.233.216.254.374s-.036.316-.151.426l-1.729 1.646 1.729 1.647c.115.11.172.269.151.426-.021.158-.114.297-.254.374L32.854 24.9l1.2 1.993c.081.135.094.3.035.445-.06.146-.184.255-.335.296l-2.45.651.595 2.216c.04.148.01.307-.082.43-.093.123-.236.197-.39.2l-2.663.056c-.285.974-1.099 2.313-2.764 2.313z",}));el.appendChild(svg["path"]("M16.188 28.824c-.022 0-.044-.001-.066-.004-.143-.019-.27-.099-.35-.219l-1.058-1.585-1.805.899c-.131.064-.283.07-.418.014-.134-.057-.237-.169-.282-.309l-.564-1.757-1.99.442c-.148.031-.299-.003-.417-.095s-.188-.231-.192-.381l-.045-1.804-2.029-.043c-.153-.003-.297-.077-.389-.2-.092-.122-.123-.281-.083-.43l.464-1.732-1.92-.51c-.152-.041-.276-.15-.335-.296s-.046-.311.035-.445l.937-1.557-1.688-.934c-.14-.077-.234-.216-.254-.374-.02-.158.036-.316.151-.426l1.352-1.289-1.352-1.287c-.115-.11-.171-.268-.151-.426.021-.158.115-.297.254-.374l1.689-.935-.937-1.558c-.081-.135-.094-.3-.035-.445.059-.146.183-.255.335-.296l1.922-.511-.466-1.732c-.04-.148-.009-.307.083-.43s.236-.196.39-.2l2.029-.042.045-1.805c.004-.149.074-.289.192-.381.117-.092.27-.127.416-.094l1.99.442.564-1.756c.045-.139.148-.251.282-.308.136-.055.287-.051.418.014l1.805.899 1.058-1.584c.08-.119.207-.199.35-.218.144-.021.287.024.395.119L18 4.172l1.484-1.291c.109-.095.253-.138.395-.119.143.019.269.099.35.218l1.057 1.583 1.807-.9c.13-.064.283-.069.417-.013.135.057.237.169.282.308l.562 1.756 1.991-.442c.146-.033.3.002.416.094.118.092.188.232.192.382l.045 1.804 2.028.042c.153.003.297.077.389.2.093.123.123.282.083.43l-.465 1.734 1.924.511c.152.041.276.15.336.296.059.146.046.311-.035.445l-.938 1.558 1.689.935c.14.077.233.216.254.374.021.158-.036.316-.151.426l-1.353 1.287 1.353 1.289c.115.11.172.268.151.426-.021.158-.115.296-.254.374l-1.688.934.938 1.557c.081.135.094.3.035.445-.06.145-.184.255-.335.296l-1.925.512.465 1.732c.04.148.01.307-.082.43-.093.123-.236.197-.39.2l-2.028.043-.045 1.804c-.004.149-.074.289-.192.381-.117.092-.271.126-.416.095l-1.991-.442-.562 1.757c-.045.139-.147.252-.282.309-.134.058-.284.053-.417-.014l-1.806-.899-1.058 1.585c-.08.12-.207.199-.35.219-.142.018-.286-.024-.395-.119L18 27.407l-1.483 1.294c-.092.08-.209.123-.329.123z", {["fill"]: "#8A4B38",["d"]: "M16.188 28.824c-.022 0-.044-.001-.066-.004-.143-.019-.27-.099-.35-.219l-1.058-1.585-1.805.899c-.131.064-.283.07-.418.014-.134-.057-.237-.169-.282-.309l-.564-1.757-1.99.442c-.148.031-.299-.003-.417-.095s-.188-.231-.192-.381l-.045-1.804-2.029-.043c-.153-.003-.297-.077-.389-.2-.092-.122-.123-.281-.083-.43l.464-1.732-1.92-.51c-.152-.041-.276-.15-.335-.296s-.046-.311.035-.445l.937-1.557-1.688-.934c-.14-.077-.234-.216-.254-.374-.02-.158.036-.316.151-.426l1.352-1.289-1.352-1.287c-.115-.11-.171-.268-.151-.426.021-.158.115-.297.254-.374l1.689-.935-.937-1.558c-.081-.135-.094-.3-.035-.445.059-.146.183-.255.335-.296l1.922-.511-.466-1.732c-.04-.148-.009-.307.083-.43s.236-.196.39-.2l2.029-.042.045-1.805c.004-.149.074-.289.192-.381.117-.092.27-.127.416-.094l1.99.442.564-1.756c.045-.139.148-.251.282-.308.136-.055.287-.051.418.014l1.805.899 1.058-1.584c.08-.119.207-.199.35-.218.144-.021.287.024.395.119L18 4.172l1.484-1.291c.109-.095.253-.138.395-.119.143.019.269.099.35.218l1.057 1.583 1.807-.9c.13-.064.283-.069.417-.013.135.057.237.169.282.308l.562 1.756 1.991-.442c.146-.033.3.002.416.094.118.092.188.232.192.382l.045 1.804 2.028.042c.153.003.297.077.389.2.093.123.123.282.083.43l-.465 1.734 1.924.511c.152.041.276.15.336.296.059.146.046.311-.035.445l-.938 1.558 1.689.935c.14.077.233.216.254.374.021.158-.036.316-.151.426l-1.353 1.287 1.353 1.289c.115.11.172.268.151.426-.021.158-.115.296-.254.374l-1.688.934.938 1.557c.081.135.094.3.035.445-.06.145-.184.255-.335.296l-1.925.512.465 1.732c.04.148.01.307-.082.43-.093.123-.236.197-.39.2l-2.028.043-.045 1.804c-.004.149-.074.289-.192.381-.117.092-.271.126-.416.095l-1.991-.442-.562 1.757c-.045.139-.147.252-.282.309-.134.058-.284.053-.417-.014l-1.806-.899-1.058 1.585c-.08.12-.207.199-.35.219-.142.018-.286-.024-.395-.119L18 27.407l-1.483 1.294c-.092.08-.209.123-.329.123z",}));el.appendChild(svg["path"]("M13.5 27.052h9c3.521 0 6.5 2.575 6.5 4.5 0 1.65-1.35 2-3 2H10c-1.65 0-3-.35-3-2 0-1.925 2.99-4.5 6.5-4.5z", {["fill"]: "#8A4B38",["d"]: "M13.5 27.052h9c3.521 0 6.5 2.575 6.5 4.5 0 1.65-1.35 2-3 2H10c-1.65 0-3-.35-3-2 0-1.925 2.99-4.5 6.5-4.5z",}));el.appendChild(svg["path"]("M26.222 22.779c0 4.088-3.68 7.398-8.222 7.398s-8.222-3.31-8.222-7.398c0-4.087 3.68-7.4 8.222-7.4s8.222 3.313 8.222 7.4z", {["fill"]: "#D99E82",["d"]: "M26.222 22.779c0 4.088-3.68 7.398-8.222 7.398s-8.222-3.31-8.222-7.398c0-4.087 3.68-7.4 8.222-7.4s8.222 3.313 8.222 7.4z",}));el.appendChild(svg["path"]("M21.289 26.479c0 2.043-1.473 3.699-3.289 3.699s-3.289-1.656-3.289-3.699S16.183 22.78 18 22.78s3.289 1.655 3.289 3.699z", {["fill"]: "#E6E7E8",["d"]: "M21.289 26.479c0 2.043-1.473 3.699-3.289 3.699s-3.289-1.656-3.289-3.699S16.183 22.78 18 22.78s3.289 1.655 3.289 3.699z",}));el.appendChild(svg["path"]("M19.645 27.711c0 .908-.736 1.645-1.645 1.645s-1.645-.736-1.645-1.645c0-.908.736-1.642 1.645-1.642s1.645.734 1.645 1.642zm-4.934-6.166c0 .682-.552 1.234-1.233 1.234s-1.233-.553-1.233-1.234c0-.68.552-1.232 1.233-1.232.681-.001 1.233.552 1.233 1.232zm9.044 0c0 .682-.552 1.234-1.232 1.234-.682 0-1.233-.553-1.233-1.234 0-.68.552-1.232 1.233-1.232.68-.001 1.232.552 1.232 1.232z", {["fill"]: "#231F20",["d"]: "M19.645 27.711c0 .908-.736 1.645-1.645 1.645s-1.645-.736-1.645-1.645c0-.908.736-1.642 1.645-1.642s1.645.734 1.645 1.642zm-4.934-6.166c0 .682-.552 1.234-1.233 1.234s-1.233-.553-1.233-1.234c0-.68.552-1.232 1.233-1.232.681-.001 1.233.552 1.233 1.232zm9.044 0c0 .682-.552 1.234-1.232 1.234-.682 0-1.233-.553-1.233-1.234 0-.68.552-1.232 1.233-1.232.68-.001 1.232.552 1.232 1.232z",}));el.appendChild(svg["path"]("M11.422 17.846s4.111-1.644 4.933 0C17.178 19.49 18 19.49 18 19.49v-4.934c0 .001-6.578.001-6.578 3.29zm13.155 0s-4.11-1.644-4.933 0C18.822 19.49 18 19.49 18 19.49v-4.934c0 .001 6.577.001 6.577 3.29z", {["fill"]: "#C1694F",["d"]: "M11.422 17.846s4.111-1.644 4.933 0C17.178 19.49 18 19.49 18 19.49v-4.934c0 .001-6.578.001-6.578 3.29zm13.155 0s-4.11-1.644-4.933 0C18.822 19.49 18 19.49 18 19.49v-4.934c0 .001 6.577.001 6.577 3.29z",}));el.appendChild(svg["path"]("M12.245 18.256c0 1.136-.92 2.056-2.055 2.056-1.136 0-2.056-.92-2.056-2.056 0-1.135.92-2.055 2.056-2.055 1.135 0 2.055.92 2.055 2.055zm15.621 0c0 1.136-.92 2.056-2.056 2.056-1.135 0-2.056-.92-2.056-2.056 0-1.135.921-2.055 2.056-2.055 1.136 0 2.056.92 2.056 2.055zM11 35c-2 0-2-4 2-4s4.062 4 2 4h-4zm10 0c-2 0-2-4 2-4s4.062 4 2 4h-4z", {["fill"]: "#D99E82",["d"]: "M12.245 18.256c0 1.136-.92 2.056-2.055 2.056-1.136 0-2.056-.92-2.056-2.056 0-1.135.92-2.055 2.056-2.055 1.135 0 2.055.92 2.055 2.055zm15.621 0c0 1.136-.92 2.056-2.056 2.056-1.135 0-2.056-.92-2.056-2.056 0-1.135.921-2.055 2.056-2.055 1.136 0 2.056.92 2.056 2.055zM11 35c-2 0-2-4 2-4s4.062 4 2 4h-4zm10 0c-2 0-2-4 2-4s4.062 4 2 4h-4z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};