{
  "defaultConnection": "default",
  "connections": {
    "default": {
      "connector": "strapi-hook-mongoose",
      "settings": {
        "client": "mongo",
        "host": "_HOST_",
        "port": 27017,
        "database": "strapi",
        "username": "_USER_",
        "password": "_PASS_",
        "srv": true
      },
      "options": {
        "ssl": true
      }
    }
  }
}
