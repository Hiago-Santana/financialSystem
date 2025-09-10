export const goTo = (router, nameRouter, params = {}) => {
    router.push({name: nameRouter, params});
}

export const goBack = (router) => {
  const isInternalReferrer = document.referrer.startsWith(window.location.origin)

  if (isInternalReferrer && window.history.length > 1) {
    router.back()
  } else {
    router.push('/')
  }
}