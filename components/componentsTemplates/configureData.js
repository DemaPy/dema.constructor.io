
export const componentsTemplates = {
    createTemplate: {
        child: `
        <div class="createTemplateBox">
            <div class="createTemplateSideBar">
                <div>
                    <h2>Parts of template</h2>
                    <div id="tagsSidebar"></div>
                    <div id="styleSidebar"></div>
                </div>
                <div>
                    <h2>Components</h2>
                    <div id="components">
                        <div class="component">
                            <span id="table">Table</span>
                        </div>
                        <div class="component">
                            <span id="category">Category</span>
                        </div>
                        <div class="component">
                            <span id="text">Text</span>
                        </div>
                        <div class="component">
                            <span id="textWithLink">Text with link</span>
                        </div>
                        <div class="component">
                            <span id="img">Img</span>
                        </div>
                        <div class="component">
                            <span id="imgWithLink">Img with link</span>
                        </div>
                        <div id="customComponent" class="custom__component">
                            <span>+</span>
                        </div>
                    </div>
                </div>
                <button class='my__btn' id='saveTemplate'>Save template</button>
            </div>
            <div style="width: 50%; display: inline-block;" id="renderTemplate"></div>
        </div>`,
    },
    renderStyles: {
        html: `
        <div class="createTemplate__template" id="renderAllstyles" >
            <div id="setStylesSidebar"></div>
        </div>
        `
    },
    configureData: {
        html: `
            <section class="configureData__section">
                <textarea autocomplete="off" class="configureData__textfield" id="configLinks"></textarea>
                <button type="button" id="saveLinks" class="my__btn">Save Links</button>
            </section>

            <section class="configureData__section">
                <textarea autocomplete="off" class="configureData__textfield" id="configText"></textarea>
                <button type="button" id="saveTranslations" class="my__btn">Save Text</button>
            </section>

            <section class="configureData__section">
                <textarea autocomplete="off" class="configureData__textfield" id="configImgNumbers"></textarea>
                <button type="button" id="saveImgNumbers" class="my__btn">Save Image Numbers</button>
            </section>
        `
    },
    startProject: {
        html: `
        <div class="modal__start">
            <h1 class="title__start">Hi! Start Your Project</h1>
            <form id="formStart" class="form">
                <div class="input__box">
                    <div class="boxInput">
                        <label class="label__start">Landing Page</label>
                        <input name="landing" class="input__start" autocomplete="off" type="text">
                    </div>
                    <div class="boxInput">
                        <label class="label__start">Campaign id</label>
                        <input name="campaignId" class="input__start" autocomplete="off" type="text">
                    </div>
                    <div class="boxInput">
                        <label class="label__start">Trello Url</label>
                        <input name="trelloUrl" class="input__start" autocomplete="off" type="text">
                    </div>
                </div>
                <div class="input__box">
                    <div class="boxInput">
                        <label class="label__start">Banner 1</label>
                        <input name="firstBanner" class="input__start" autocomplete="off" type="text">
                    </div>
                    <div class="boxInput">
                        <label class="label__start">Banner 2</label>
                        <input name="secondBanner" class="input__start" autocomplete="off" type="text">
                    </div>
                    <div class="boxInput">
                        <label class="label__start">Campaign name:</label>
                        <input name="campaignName" class="input__start" autocomplete="off" type="text">
                    </div>
                </div>

                <div class="boxBtn column">
                    <button type="submit" id="next" class="my__btn hideBtn modal_btn">Next</button>
                </div>
            </form>
        </div>
    `
    },
    selectImgNumbers: {
        html: `
        <div class="modal__start">
            <h1 class="title__start">Select img numbers</h1>
            <div class="columnH100">
                <div class="boxInput">
                    <div class="imgNumbers__box" id="imgNumbers"></div>
                </div>
                <div class="boxBtn">
                    <button type="button" id="back" class="my__btn hideBtn modal_btn">Back</button>
                    <button type="button" id="next" class="my__btn hideBtn modal_btn">Next</button>
                </div>
            </div>
        </div>
    `
    },
    campaigns: {
        html: `<div id="campaigns"></div>`
    }
}