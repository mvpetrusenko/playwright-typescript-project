export const mainPage = {
    inputSearch: 'input#searchInput', 
    buttonSearch: 'button.cp-form-group-search-btn-grd', 
    buttonAddress: '[data-e2e="layout.header.btnAddress"]', 
    buttonChangeCity: '[class="cp-drawer-city__address-navigation"] [class*="cp-btn"]', 
    inputSearchCity: '[data-e2e="components.ui.searchInput"] input#searchInput',
    buttonSearchCity: '[data-e2e="components.ui.searchInput"] button.cp-form-group-search-btn', 
    firstCitySuggestion: '[class="cp-backlight"]', 
    headerWrapper: 'div.cp-header-mobile-grd__wrapper.cp-block', 
    searchResult: 'div[class="cp-search-text"]', 
    topDrugsSection: '[data-e2e="components.reference.topReferences"]',
    firstResult: 'a[class="cp-drug-item__title"]:nth-of-type(1)', 
    firstResultPhoto: '[href="/dec/270555/66303/"]:nth-of-type(1)',
    ruSwitcher: '[data-e2e="layout.themeSwitcher.ukrLight"]', 
    uaSwitcher: '[data-e2e="layout.themeSwitcher.ukrDark"]', 
    buttonLogin: '[data-e2e="layout.header.btnLogin"]', 
    buttonFavorites: '[data-e2e="layout.header.btnFavorites"]',
    buttonMedExpertProfile: '[class*="cp-auth__list-loginDoctor"]', 
    buttonCategories: 'button#headerCategoryBtn', 
    jumbotron: '[class="cp-jumbotron"]', 
    topDrugPhoto: '[class*="top-reference-card"] [title="Алохол (Allocholum)"]:nth-of-type(1)', 
    sectionCategories: '[data-e2e="components.home.categoriesCompendium"]', 
    buttonAllNews: '[class="cp-keenslider__header-info"] [href="/uk/news/"]',
    newsText: '.cp-blog-card-normal__info a[href*="rannya"]'
} 

export const aboutDrugPage = {

    tabAboutDrug: 'span[class*="cp-tabs__active-item"]', 
    unSelectedHeartIcon: 'button[class*="cp-button-favorite__transparent"]', 
    selectedHeartIcon: 'button[class*="cp-button-favorite__in-wishlist"]', 
    buttonSelected: '[data-e2e="layout.header.btnFavorites"]', 
    addedItemToSelected: '[data-e2e="ui.drugItem"]', 
    emptyFavoritesPage: 'div[class="cp-history-favorite__empty_title"]', 
    tabsInstruction: '[data-e2e="components.ui.tabs"]', 
    firstDosingUnit: '[data-e2e="components.drug.drugAmountSelector"]:nth-of-type(1)', 
    secondDosingUnit: '[data-e2e="components.drug.drugAmountSelector"]:nth-of-type(2)', 
    dosingContent: '[data-e2e="components.drug.drugAmountSelector"]:nth-of-type(1)', 
    releaseFormBlock: '[data-e2e="components.reference.referenceDrugCharacteristicsSku"]', 
    blockInstruction: '[data-e2e="components.drugInstruction"]', 
    linkHowToUse: '[href="#howToUse"]', 
    blockHowToUse: '[id="anchor-howToUse"]'

} 

export  const instructionPage = {
    tabInstructionBreadCrumb: '//li[1]/span/span', 
    tabInstructionAboutDrug: '//li[1]/span/a', 
    sectionInstruction: '[data-e2e="components.drugInstruction"]',
    buttonNotAvailable: '[data-e2e="components.reference.notAvailable"]', 
    buttonFindAnalogues: '[class*="cp-reference-detail-archived__btn-wrapper-analogs"]', 
    sectionAnalogues: '[data-e2e="components.drugs.drugsBrowser"]', 
    tabDrugApplication: '[href="#application"]', 
    sectionDrugApplication: 'div#anchor-application', 
    tabDrugSideEffects: '[href="#sideEffects"]', 
    sectionDrugSideEffects: 'div#anchor-sideEffects', 
    drugPhoto: 'div.cp-drug-item__image-wrapper a:nth-of-type(1)'
}

export const analoguePage = {
    tabAnalogues: '//a[contains(@href, "analogy")]', 
    endArrowToBreadcrumbs: '[class*="cp-breadcrumbs__arrow-end"]', 
    startArrowToBreadcrumbs: '[class*="cp-breadcrumbs__arrow-start"]',
    lastBreadcrumb: 'button[disabled="disabled"]', 
    preLastBreadcrumb: '[href="/dec/347399/"][data-e2e="components.ui.breadcrumbs.breadcrumbsItem"]', 
    homeBreadcrumb: '[href="/uk/"][data-e2e="components.ui.breadcrumbs.breadcrumbsItem"]', 
    buttonGrid: 'div[class="cp-drugs-browser__options-view"] button[class*="cp-ml-3"]:nth-of-type(2)', 
    buttonTile: 'div[class="cp-drugs-browser__options-view"] button[class*="cp-ml-3"]:nth-of-type(1)', 
    gridDisplay: '[class*="cp-row"]:nth-of-type(1)', 
    tileDisplay: '[class*="cp-card"]:nth-of-type(1)', 
    buttonFavorite: '[class*="cp-button-favorite"]:nth-of-type(1)', 
    selectedButtonFavorite: 'button[class*="cp-button-favorite__in-wishlist"]', 
    buttonFilter: '[class*="cp-drugs-browser__filter-btn"]', 
    chechboxTablets: 'input#cb-format-tablets', 
    checkboxDosingFifty: '[id="cb-dosage-50 мг"]', 
    checkboxQuantityFifty: '[id="cb-number-50"]', 
    checkboxManufacturerLubnifarm: '[id="cb-maker-Лубнифарм"]', 
    firstFilterResult: '[data-e2e="ui.drugItem"]', 
    drugItemDescription: '[class="cp-drug-item__description"]', 
    drugItemManufacturer: '[class="cp-drug-item__maker"]'

    

}

export const pricesPage = {
    drugName: '[class="cp-offer-item__drug-name"]', 
    drugPrice: '[class="cp-offer-item__new-prices"]', 
    tabPrices: '[class="cp-tabs__item-link"]:nth-of-type(1)', 
    offersBlock: '[data-e2e="components.offer.offersBrowser"]', 
    defaultSortingTab: '[class*="cp-dropdown-slot-text"]', 
    firstDrugStore: '[data-e2e="components.offer.offerItemV2"]:nth-of-type(1)', 
    twentiethDrugStore: '[data-e2e="components.offer.offerItemV2"]:nth-of-type(20)', 
    twentyfirstDrugStore: '[data-e2e="components.offer.offerItemV2"]:nth-of-type(21)', 
    fortiethDrugStore: '[data-e2e="components.offer.offerItemV2"]:nth-of-type(40)', 
    buttonDownloadMore: '[class*="cp-btn-primary"]', 
    tabInOhterCities: '[class="cp-offers-browser__in-other-cities"]', 
    buttonRoute: '[class*="cp-offer-item__badge-wrapper"] [class*="cp-badge"]:nth-of-type(1)', 
    routeModalWindow: '[class*="cp-modal-direction__absolute"]',
    buttonCloseRouteModalWindow: '[class*="cp-modal-direction__title"] [class*="cp-btn"]', 
    routeLine: '[stroke="red"]', 
    buttonDecrease: '[class*="cp-quantity-panel-btn"]:nth-of-type(1)', 
    buttonIncrease: '[class*="cp-quantity-panel-btn"]:nth-of-type(2)', 
    counter: '[class*="cp-quantity-panel-counter"]', 
    buttonInBasket: '[class="cp-block"] [class*="cp-badge"]'

}

export const basketPage = {
    buttonPrice: 'a[class*="cp-drug-item__btn"]:nth-of-type(1)', 
    buttonOrder: 'button[class*="cp-offer-item__btn"]:nth-of-type(1)', 
    buttonBasket: '[data-e2e="layout.header.btnBasket"]', 
    addedItemToBasket: '[data-e2e="components.cart.cartOrderDrugItemPage"]', 
    drugName: '[class="cp-cart-order-drug-item-page__text-name"]', 
    drugPrice: '[class="cp-cart-order-drug-item-page__price"]', 
    emptyBasket: '[class="cp-cart-empty__content"]'

} 

export const bookDrugPage = { 
    buttonMakeBooking: '[class*="cp-cart-total-sum__btn"]', 
    formMakeBooking: '[class="cp-modal-simple__content"]', 
    inputBookPhone: 'input#form-input', 
    buttonMakeOrder: '[class*="cp-cart-confirm-modal__btn"]', 
    formBookedOrder: '[class*="cp-checkout-done__order-items"]', 
    modalWaitingForBooking: '[class*="cp-modal-simple__header"]'

} 

export const thanksForOrderPage = {
    drugNameOrder: '[class="cp-order-drug-item__text-name"]', 
    drugAddressOrder: '[class="cp-pharmacy-item__address-text"]'
} 

export const mapPage = {
    tabMap: '[class*="cp-tabs__active-item"]'
}

export const innPage = {
    innClassification: 'button[class*="cp-mega-menu-modal__category-item"]:nth-of-type(2)', 
    homeBreadcrumbs: '[data-e2e="components.ui.breadcrumbs.breadcrumbsItem"]:nth-of-type(1)', 
    activeLetter: 'a[class*="cp-alphabet-list__link-active"]'
} 

export const newsPage = {
    newsArticleTitle: '[class="cp-page-title"]', 
    newsBlogCard: '[data-e2e="components.news.newsListCarousel"] [data-e2e="components.ui.keen-slider"]', 
    titleAllNews: '[class= "cp-page-title"]'
}

export const alphabeticalIndexPage = {
    alphabeticalIndex: 'button[class*="cp-mega-menu-modal__category-item"]:nth-of-type(8)', 
    homeBreadcrumbs: '[data-e2e="components.ui.breadcrumbs.breadcrumbsItem"]:nth-of-type(1)', 
    activeLetter: 'a[class*="cp-alphabet-list__link-active"]' 
} 

export const manufacturersPage = {
    manufacturers: 'button[class*="cp-mega-menu-modal__category-item"]:nth-of-type(9)', 
    homeBreadcrumbs: '[data-e2e="components.ui.breadcrumbs.breadcrumbsItem"]:nth-of-type(1)', 
    activeLetter: 'a[class*="cp-alphabet-list__link-active"]', 
    manufacturerItem: '[class="cp-maker-item__link"]', 
    manufactureInfo: '[class="cp-brand-header__info"]'

}

export const cyrillicLettersArray = { 

    lLetter: '//span[text() = "L"]', 
    aLetter: '//span[text() = "А"]',
    bLetter: '//span[text() = "Б"]',
    vLetter: '//span[text() = "В"]',
    gLetter: '//span[text() = "Г"]',
    dLetter: '//span[text() = "Д"]',
    eLetter: '//span[text() = "Е"]',
    jLetter: '//span[text() = "Ж"]',
    zLetter: '//span[text() = "З"]',
    iLetter: '//span[text() = "І"]',
    iiLetter: '//span[text() = "Й"]',
    kLetter: '//span[text() = "К"]',
    llLetter: '//span[text() = "Л"]',
    mLetter: '//span[text() = "М"]',
    nLetter: '//span[text() = "Н"]',
    oLetter: '//span[text() = "О"]',
    pLetter: '//span[text() = "П"]',
    rLetter: '//span[text() = "Р"]',
    sLetter: '//span[text() = "С"]',
    tLetter: '//span[text() = "Т"]', 
    yLetter: '//span[text() = "У"]',
    fLetter: '//span[text() = "Ф"]',
    hLetter: '//span[text() = "Х"]',
    cLetter: '//span[text() = "Ц"]',
    chLetter: '//span[text() = "Ч"]', 
    shLetter: '//span[text() = "Ш"]',
    yaLetter: '//span[text() = "Я"]'

} 


export const latinLettersArray = { 
    aEngLetter: '//span[text() = "A"]', 
    bEngLetter: '//span[text() = "B"]', 
    cEngLetter: '//span[text() = "C"]',
    dEngLetter: '//span[text() = "D"]',
    eEngLetter: '//span[text() = "E"]',
    fEngLetter: '//span[text() = "F"]',
    gEngLetter: '//span[text() = "G"]',
    hEngLetter: '//span[text() = "H"]',
    iEngLetter: '//span[text() = "I"]',
    jEngLetter: '//span[text() = "J"]', 
    kEngLetter: '//span[text() = "K"]',
    lEngLetter: '//span[text() = "L"]',
    mEngLetter: '//span[text() = "M"]',
    nEngLetter: '//span[text() = "N"]',
    oEngLetter: '//span[text() = "O"]',
    pEngLetter: '//span[text() = "P"]',
    qEngLetter: '//span[text() = "Q"]',
    rEngLetter: '//span[text() = "R"]',
    sEngLetter: '//span[text() = "S"]',
    tEngLetter: '//span[text() = "T"]',
    uEngLetter: '//span[text() = "U"]',
    vEngLetter: '//span[text() = "V"]',
    wEngLetter: '//span[text() = "W"]',
    xEngLetter: '//span[text() = "X"]',
    yEngLetter: '//span[text() = "Y"]',
    zEngLetter: '//span[text() = "Z"]'

} 


export const numbersArray = { 
    one: "//span[@class='cp-btn-left' and text() = '1']", 
    two: '//span[text() = "2"]',
    three: '//span[text() = "3"]',
    five: '//span[text() = "5"]',
    seven: '//span[text() = "7"]',
    eight: '//span[text() = "8"]',
    nine: '//span[text() = "9"]'

}

export const searchResultsPage = {
    addToFavorite: '[data-e2e="components.ui.ButtonFavorite"]:nth-of-type(1)', 
    tabSelectedDrugsButton: '[data-e2e="layout.header.btnFavorites"]', 
    addedDrug: 'div[class="cp-card"]'
} 

export const medExpertProfilePage = {
    formDoctorLogin: '[data-e2e="components.form.loginFormDoctor"]'

} 

export const buyerProfilePage = {
    buyerLogin: '[class*="cp-auth__list-login"]:nth-of-type(1)', 
    formLogin: '[data-e2e="components.form.loginForm"]', 
    inputLoginPhone: 'input#loginFormPhone', 
    inputLoginPassword: 'input#loginFormPassword', 
    buttonLogIn: '[class="cp-auth-form__footer"] [class*="cp-btn-primary"]', 
    buttonViewPassword: '[class*="cp-auth-form__group-password"] button[class*="cp-icon-input"]', 
    visiblePassword: '[class*="cp-auth-form__group-password"] [type="text"]', 
    hiddenPassword: '[class*="cp-auth-form__group-password"] [type="password"]', 
    invalidLoginMessage: '[class="cp-auth-form__message"]', 
    buttonResetPassword: '[href="/uk/vidnovity-parol/"]', 
    buttonRegistration: '[href="/uk/reyestraciya/"]'

} 

export const resetPasswordPage = { 
    formResetPasswordStep1: '[data-e2e="components.form.resetPassFormStep1"]', 
    formResetPasswordStep2: '[data-e2e="components.form.resetPassFormStep2"]',
    inputResetPasswordPhone: 'input#resetPassFormStep1Phone', 
    invalidPhoneMessage: '[class="cp-form-validation-errors"]', 
    buttonContinueDisabled: '[class="cp-auth-form__footer"] [class*="cp-btn-disabled"]', 
    buttonContinueEnabled: '[class="cp-auth-form__footer"] [class*="cp-btn-primary"]', 
    loader: '[data-e2e="components.form.ui.waitMessage"]'

} 

export const registrationPage = {
    formRegistration: '[data-e2e="components.form.registrationForm"]', 
    inputRegistrationPhone: 'input#registrationFormPhone'

}

export const profilePage = {
    tabMyOrders: '[class*="cp-tabs__active-item"]', 
    firstOrderOnProfilePage: '[class="cp-cabinet-orders-item__tab-info__order"]', 
    drugTextOrder: '[class="cp-cabinet-order-drug-item__text-name"]:nth-of-type(1)'
}

export const libraryPage = {
    libraryTab: 'button[class*="cp-mega-menu-modal__category-item"]:nth-of-type(10)', 
    libraryHeader: '[data-e2e="components.library.libraryHeader"]'

}

export const clinicalGuidelinesPage = {
    tabClinicalGuidelines: "//a[contains(@href, 'clinical-guidelines')]", 
    pageClinicalGuidelines: '[data-e2e="pages.guidelinesList"]',
    firstClinicalGuidelines: '[data-e2e="components.library.termItem"]:nth-of-type(1)', 
    sectionContents: '[class*="cp-guideline-item__list-wrapper"]', 
    firstSubSection: '[class*="cp-article-item"]', 
    article: '[class*="cp-page-article-tabs__manuals-content__wrapper"]'

} 

export const medicalLiteraturePage = { 
    tabMedicalLiterature: "//a[contains(@href, 'tutorials')]", 
    firstBook: '[class="cp-book-item-list__title"]:nth-of-type(1)', 
    aboutBookInfo: '[data-e2e="components.library.tutorialHeader"]', 
    pageTitle: '[class="cp-page-title"]', 
    previousBreadCrumbTab: '[class="cp-breadcrumbs__list-link-item"]:nth-of-type(1)'

} 

export const nosologicalReferenceBookPage = { 
    tabReferenceBooks: "//a[contains(@href, 'handbooks')]", 
    tabDoctorsNosologicalReferenceBook: "//a[contains(@href, 'nozologia-dovidnyk')]", 
    referenceBooksContent: '[class*="cp-handbook-item__list-wrapper"]', 
    firstArticleItem: '[class="cp-article-item"]:nth-of-type(1)', 
    referenceBookChapter: '[data-e2e="components.library.handbookChapter"]'
    

}