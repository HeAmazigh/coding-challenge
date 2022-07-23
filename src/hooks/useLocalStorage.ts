import {useEffect, useState} from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [] = useState(() => {
    const jsonValue = localStorage.getItem(key)
    if (jsonValue != null) return JSON.parse(jsonValue)

    if (typeof initialValue === "function") {
      return 
    }
  })
}