// This false if you're using a fallback (i.e. SPA mode)
export const prerender = true;

/**
 * 
 * @param param0     <meta name="description" content="Personal site of Corey Gross" />
    <meta name="author" content="Corey Gross" />
 * @returns 
 */

export const load = async ({ url }) => {
  return {
    title: "Corey Gross - Personal Website",
    description:
      "I'm Corey, a graduate of Rochester Institute of Technology with a B.S. in Computer Science.",
    keywords:
      "corey gross, personal, resume, software, developer, programming,",
    author: "Corey Gross",
    logo: `${url.origin}/favicon.svg`,
  };
};
