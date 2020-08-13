export const actionRenameMap: { [key: string]: string } = {
    // '3dsecure-wrapper': 'Payment.process3DSecure',
    // 'append-global': 'Global.appendGlobal',
    // 'captcha-normal': 'Captcha.solveCaptcha',
    // 'captcha-recaptcha-v2': 'Captcha.solveRecaptcha',
    // 'checkpoint': 'Flow.checkpoint',
    // 'click': 'Page.click',
    // 'consent': 'Payment.consent',
    // 'cookies': 'Page.setCookies',
    // 'dataset-insert': 'Data.insertDataset',
    // 'dataset-predict': 'Data.predictDataset',
    // 'dataset-query': 'Data.queryDataset',
    // 'delegate-payment': 'Payment.delegate',
    // 'download-blob': 'Data.downloadBlob',
    // 'download-html': 'Data.downloadHtml',
    // 'each': 'Flow.each',
    // 'else-if': 'Flow.elseIf',
    // 'else': 'Flow.else',
    // 'expect': 'Flow.expect',
    // 'fail': 'Flow.fail',
    // 'find': 'Flow.find',
    // 'get-data-cache': 'Data.getDataCache',
    // 'group': 'Flow.group',
    // 'hover': 'Page.hover',
    // 'if': 'Flow.if',
    // 'input-file': 'Page.inputFile',
    // 'input': 'Page.input',
    // 'javascript': 'Eval.javascript',
    // 'leave-context': 'Flow.leaveContext',
    // 'navigate': 'Page.navigate',
    // 'output-dynamic': 'Flow.dynamicOutput',
    // 'output': 'Flow.output',
    // 'pan-exchange': 'Payment.panExchange',
    // 'placeholder': 'placeholder',
    // 'pnr-set': 'Payment.setPnr',
    // 'pnr-unset': 'Payment.unsetPnr',
    // 'screenshot': 'Page.screenshot',
    // 'send-network-request': 'Page.fetch',
    // 'set-data-cache': 'Data.setDataCache',
    // 'set-global': 'Global.setGlobal',
    // 'set-value': 'Page.setValue',
    // 'sleep': 'Flow.sleep',
    // 'success': 'Flow.success',
    // 'switch-target': 'Page.switchTarget',
    // 'while': 'Flow.while',
};

export const pipeRenameMap: { [key: string]: string } = {
    // 'dom/attribute': 'DOM.getAttribute',
    // 'dom/batch-extract': 'DOM.batchExtract',
    // 'dom/child-text': 'DOM.getChildText',
    // 'dom/closest': 'DOM.closest',
    // 'dom/computed-style': 'DOM.getComputedStyle',
    // 'dom/document-property': 'DOM.getDocumentProperty',
    // 'dom/find-topmost': 'DOM.topmost',
    // 'dom/frame-info': 'Browser.getFrameInfo',
    // 'dom/get-document': 'DOM.document',
    // 'dom/has-class': 'DOM.hasClass',
    // 'dom/href': 'DOM.getHref',
    // 'dom/iframe': 'DOM.iframe',
    // 'dom/inner-html': 'DOM.getInnerHtml',
    // 'dom/inner-text': 'DOM.getInnerText',
    // 'dom/innermost': 'DOM.innermost',
    // 'dom/is-disabled': 'DOM.isDisabled',
    // 'dom/is-selected': 'DOM.isSelected',
    // 'dom/is-visible': 'DOM.isVisible',
    // 'dom/matches-selector': 'DOM.matches',
    // 'dom/next-sibling': 'DOM.nextSibling',
    // 'dom/outermost': 'DOM.outermost',
    // 'dom/parent': 'DOM.parent',
    // 'dom/previous-sibling': 'DOM.previousSibling',
    // 'dom/query-all': 'DOM.queryAll',
    // 'dom/query-by-text': 'DOM.queryByText',
    // 'dom/query-exists-visible': 'DOM.existsVisible',
    // 'dom/query-one': 'DOM.queryOne',
    // 'dom/query-xpath-all': 'DOM.queryXPathAll',
    // 'dom/query-xpath-one': 'DOM.queryXPathOne',
    // 'dom/text': 'DOM.getText',
    // 'dom/text-content': 'DOM.getTextContent',
    // 'dom/value': 'DOM.getValue',
    // 'flight-booking/get-passengers-with-age-groups': 'FlightBooking.getPassengersWithAgeGroups',
    // 'flight-booking/get-search-passenger-groups': 'FlightBooking.getSearchPassengerGroups',
    // 'flight-booking/is-return-flight': 'FlightBooking.isReturnFlight',
    // 'hotel-booking/room-price-breakdown': 'HotelBooking.getRoomPriceBreakdown',
    // 'other/append': 'List.append',
    // 'other/assert-exists': 'Assert.exists',
    // 'other/count-by': 'List.countBy',
    // 'other/filter': 'List.filter',
    // 'other/filter-contains-text': 'List.filterContainsText',
    // 'other/filter-equals-text': 'List.filterEqualsText',
    // 'other/filter-path-contains-text': 'List.filterPathContainsText',
    // 'other/filter-path-equals': 'List.filterPathEquals',
    // 'other/filter-path-equals-text': 'List.filterPathEqualsText',
    // 'other/filter-query-exists': 'List.filterExistsVisible',
    // 'other/filter-visible': 'List.filterVisible',
    // 'other/fold-all': 'List.every',
    // 'other/fold-any': 'List.some',
    // 'other/fold-array': 'List.toArray',
    // 'other/fold-count': 'List.countBy',
    // 'other/fold-exists': 'List.exists',
    // 'other/fold-join': 'String.join',
    // 'other/fold-length': 'List.length',
    // 'other/fold-sum': 'Number.sum',
    // 'other/get-cookies': 'Browser.getCookies',
    // 'other/if-else': 'Eval.ifElse',
    // 'other/javascript': 'Eval.javascript',
    // 'other/label': 'Custom.label',
    // 'other/limit': 'List.limit',
    // 'other/local-restore': 'Data.restoreLocal',
    // 'other/local-save': 'Data.saveLocal',
    // 'other/merge-by-index': 'Data.mergeByIndex',
    // 'other/merge-by-path': 'Data.mergeByPath',
    // 'other/prepend': 'List.prepend',
    // 'other/repeat': 'List.repeat',
    // 'other/reverse': 'List.reverse',
    // 'other/select-network-resources': 'Browser.selectNetworkResources',
    // 'other/select-targets': 'Browser.selectTargets',
    // 'other/skip': 'List.skip',
    // 'other/skip-while': 'List.skipWhile',
    // 'other/sort-by': 'List.sortBy',
    // 'other/take-while': 'List.takeWhile',
    // 'other/unfold-array': 'List.fromArray',
    // 'other/use': 'Definition.use',
    // 'value/and': 'Boolean.and',
    // 'value/assign': 'Object.assign',
    // 'value/calc-age': 'FlightBooking.calcAge',
    // 'value/compose': 'Object.compose',
    // 'value/contains': 'Value.contains',
    // 'value/contains-text': 'Value.containsText',
    // 'value/delete-path': 'Object.deletePath',
    // 'value/equals': 'Value.equals',
    // 'value/equals-text': 'Value.equalsText',
    // 'value/expression': 'Eval.expression',
    // 'value/extract-regexp': 'String.extractRegexp',
    // 'value/format-country': 'Data.formatCountry',
    // 'value/format-date': 'Date.format',
    // 'value/format-phone': 'Data.formatPhone',
    // 'value/format-price': 'Data.formatPrice',
    // 'value/format-region': 'Data.formatRegion',
    // 'value/format-template': 'String.formatTemplate',
    // 'value/format-url': 'Data.formatUrl',
    // 'value/get-blob': 'Browser.getBlob',
    // 'value/get-constant': 'Value.getConstant',
    // 'value/get-constant-array': 'Value.getConstantArray',
    // 'value/get-global': 'Value.getGlobal',
    // 'value/get-input': 'Value.getInput',
    // 'value/get-input-dynamic': 'Value.getDynamicInput',
    // 'value/get-json': 'Value.getJson',
    // 'value/get-path': 'Object.getPath',
    // 'value/has-path': 'Object.hasPath',
    // 'value/is-empty': 'Value.isEmpty',
    // 'value/lookup-airport': 'FlightBooking.lookupAirport',
    // 'value/lookup-country': 'String.lookupCountry',
    // 'value/map-range': 'Number.mapRange',
    // 'value/map-regexp': 'String.mapRegexp',
    // 'value/matches-regexp': 'String.matchesRegexp',
    // 'value/not': 'Boolean.not',
    // 'value/numeric-compare': 'Number.compare',
    // 'value/or': 'Boolean.or',
    // 'value/parse-arabic-number': 'String.parseArabicNumber',
    // 'value/parse-boolean': 'String.parseBoolean',
    // 'value/parse-color': 'String.parseColor',
    // 'value/parse-json': 'String.parseJson',
    // 'value/parse-number': 'String.parseNumber',
    // 'value/parse-phone': 'String.parsePhone',
    // 'value/parse-price': 'String.parsePrice',
    // 'value/parse-price-all': 'String.parsePriceAll',
    // 'value/parse-price-with-zero-support': 'String.parsePriceWithReference',
    // 'value/parse-url': 'String.parseUrl',
    // 'value/peek-input': 'Value.peekInput',
    // 'value/pick-keys': 'Object.pick',
    // 'value/remove-diacritics': 'String.removeDiacritics',
    // 'value/replace-regexp': 'String.replaceRegexp',
    // 'value/sanitize-html': 'String.sanitizeHtml',
    // 'value/set-path': 'Object.setPath',
    // 'value/wrap': 'Object.wrap',

    // New ones! Don't remove!!!!
    'String.formatCountry': 'Data.formatCountry',
    'String.formatDate': 'Date.format',
};

export function migrateActionSpec(spec: any = {}): any {
    const renamedType = actionRenameMap[spec.type];
    if (renamedType) {
        spec.type = renamedType;
    }
    return spec;
}

export function migratePipeSpec(spec: any = {}): any {
    const renamedType = pipeRenameMap[spec.type];
    if (renamedType) {
        spec.type = renamedType;
    }
    return spec;
}
