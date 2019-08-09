export default (blogs, { text, sortBy }) => {
  return blogs.filter((blog) => {

    const textMatch = (blog.description.toLowerCase().includes(text.toLowerCase())) || blog.title.toLowerCase().includes(text.toLowerCase());

    return textMatch;
  }).sort((a, b) => {
    if (sortBy === 'title') {
      return a.title < b.title ? 1 : -1;
    } else if (sortBy === 'description') {
      return a.description < b.description ? 1 : -1;
    }
  });
};
