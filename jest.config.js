module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleFileExtensions: [
    "js", 
    "json",
    "vue"
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^~/(.*)$": "<rootDir>/$1"
  },
  transform: {
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.js$": "babel-jest"
  }
}
