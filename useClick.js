export const useClick = (onClick) => {
  const ref = useRef();
  useEffect(() => {
    const element = ref;
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, [onClick]);
  return ref;
};
