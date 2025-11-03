function useLocalStorage(value) {

    function setLocal() {
        localStorage.setItem("value", value)
    }

    return [setLocal]
    
}

export default useLocalStorage