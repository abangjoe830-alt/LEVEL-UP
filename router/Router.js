class Router {

    constructor() {

        this.routes = {};

        this.current = "dashboard";

    }

    register(name, renderFunction) {

        this.routes[name] = renderFunction;

    }

    go(name) {

        if (!this.routes[name]) {

            console.error("Halaman tidak ditemukan :", name);

            return;

        }

        this.current = name;

        document.getElementById("app").innerHTML =
            this.routes[name]();

    }

}

const router = new Router();