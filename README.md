#Style guide:

1) Git: 
+ Tên Branch: đặt theo feature.
+ Sematic: 
    feat: add hat wobble
    ^--^  ^------------^
    |     |
    |     +-> Summary in present tense.
    |
    +-------> Type: chore, docs, feat, fix, refactor, style, or test.

    feat: (new feature for the user, not a new feature for build script)
    fix: (bug fix for the user, not a fix to a build script)
    docs: (changes to the documentation)
    style: (formatting, missing semi colons, etc; no production code change)
    refactor: (refactoring production code, eg. renaming a variable)
    test: (adding missing tests, refactoring tests; no production code change)
    chore: (updating grunt tasks etc; no production code change)

    https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716?fbclid=IwZXh0bgNhZW0CMTAAAR0KQhhJn87_hCALntI7YM6TblZWAIa3VzFLVqPs4GMP2gFc18ytF1OrcXU_aem_AUlxfyNhPuj8vX7pdCIvhOBf3h2xCBg1wizB1LsuPp31lI3SBKBseeTGJ8hh2WE1tlasEJ7H9roCTs4Egd--iXCH

2) CSS: 
+ UI libraries: Vuetify, 
+ Tên class: camelCase (): prefix + class name.
+ <Style Module></Style>

3) Store:
+ Pinia