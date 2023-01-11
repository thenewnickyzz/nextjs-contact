const Input = (props) => {
  const className = `
        w-full my-3 p-4 rounded-lg
        text-zinc-50 placeholder:text-zinc-300
        font-medium focus:outline-zinc-500 bg-zinc-200/50
    `;

  return props.isTextarea ? (
    <textarea {...props} className={className} />
  ) : (
    <input {...props} className={className} />
  );
};

export default Input;
