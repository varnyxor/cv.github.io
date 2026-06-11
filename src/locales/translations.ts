export const translations = {
    en: {
      title: 'CV | João Lopes Frias',
      aboutMe: 'About Me:',
      skills: 'Skills:',
      experience: 'Professional Experience:',
      projects: 'Personal Projects:',
      education: 'Education:',
      interests: 'Interests:',
      print: 'Print',
      download: 'PDF',
      viewSource: 'Source code (Github)',
      darkMode: 'Dark mode',
      lightMode: 'Light mode',
    },
    pt: {
      title: 'CV | João Lopes Frias',
      aboutMe: 'Sobre Mim:',
      skills: 'Competências:',
      experience: 'Experiência Profissional:',
      projects: 'Projetos Pessoais:',
      education: 'Educação:',
      interests: 'Interesses:',
      print: 'Imprimir',
      download: 'PDF',
      viewSource: 'Código fonte (Github)',
      darkMode: 'Modo escuro',
      lightMode: 'Modo claro',
    }
  };
  
  export const getTranslation = (language: 'pt' | 'en', key: keyof typeof translations.en) => {
    return translations[language][key];
  };