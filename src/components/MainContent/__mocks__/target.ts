import { ITarget } from '../../../models/target/index';

export const targetMock: ITarget = {
  title: 'English Language Arts Specification: Grade 3 Claim 1 Target 3',
  shortCode: 'E.G3.C1RL.T3',
  description:
    'Determine intended meanings of words, including words with multiple meanings (academic/tier 2 words), based on context, word relationships, word structure (e.g., common roots, affixes), or use of reference materials (e.g., beginning dictionary), with primary focus on determining meaning based on context and the academic (tier 2) vocabulary common to complex texts in all disciplines.',
  standards: [
    {
      stdCode: 'E.G3.C1RL.T3.L.3.4',
      stdDesc:
        'Determine or clarify the meaning of unknown and multiple-meaning words and phrases based on *grade 3 reading and content*, choosing flexibly from a range of strategies.'
    },
    {
      stdCode: 'E.G3.C1RL.T1.RL.3.1',
      stdDesc:
        'Ask and answer questions to demonstrate understanding of a text, referring explicitly to the text as the basis for the answers.'
    },
    {
      stdCode: 'E.G3.C1RL.T3.RL.3.4',
      stdDesc:
        'Determine the meaning of words and phrases as they are used in a text, distinguishing literal from non-literal language.'
    },
    {
      stdCode: 'E.G3.C1RL.T3.L.3.4a',
      stdDesc: 'Use sentence-level context as a clue to the meaning of a word or phrase.'
    },
    {
      stdCode: 'E.G3.C1RL.T3.L.3.4b',
      stdDesc:
        'Determine the meaning of the new word formed when a known affix is added to a known word (e.g., *agreeable/disagreeable, comfortable/uncomfortable, care/careless, heat/preheat*).'
    },
    {
      stdCode: 'E.G3.C1RL.T3.L.3.4c',
      stdDesc:
        'Use a known root word as a clue to the meaning of an unknown word with the same root (e.g.,* company, companion*).'
    },
    {
      stdCode: 'E.G3.C1RL.T3.L.3.4d',
      stdDesc:
        'Use glossaries or beginning dictionaries, both print and digital, to determine or clarify the precise meaning of key words and phrases.'
    },
    {
      stdCode: 'E.G3.C1RL.T3.L.3.5c',
      stdDesc:
        'Distinguish shades of meaning among related words that describe states of mind or degrees of certainty (e.g., *knew, believed, suspected, heard, wondered*).'
    }
  ],
  DOK: [
    {
      dokCode: 'R-DOK1',
      dokDesc:
        'Level 1 requires students to receive or recite facts or to use simple skills or abilities. Oral reading that does not include analysis of the text as well as basic comprehension of a text is included. Items require only a shallow understanding of text presented and often consist of verbatim recall from text or simple understanding of a single word or phrase.',
      dokShort: 'Level 1: Recall and Reproduction'
    },
    {
      dokCode: 'R-DOK2',
      dokDesc:
        'Level 2 includes the engagement of some mental processing beyond recalling or reproducing a response; it requires both comprehension and subsequent processing of text or portions of text. Intersentence analysis of inference is required. Some important concepts are covered but not in a complex way. Standards and items at this level may include words such as summarize, interpret, infer, classify, organize, collect, display, compare, and determine whether fact or opinion. Literal main ideas are stressed. A Level 2 assessment item may require students to apply some of the skills and concepts that are covered in Level 1.',
      dokShort: 'Level 2: Skills and Concepts'
    }
  ],
  targetType: 'CAT',
  clarification:
    'Targeted vocabulary words and phrases should be important to the text and worth assessing. The targeted vocabulary words and phrases should be **one to two** grade levels above testing grade. If the targeted word/phrase is used in a context that is different from what a student would normally encounter, it may be on grade level (e.g., state, factor). Answer choices need to be **on or below** grade level.\r\n\r\nThe vocabulary focus of this target is on determining meaning of tier 2 words based on context. Items focusing on antonyms and synonyms, Greek or Latin roots, affixes, and the use of resources should be limited. For a list of academic/tier 2 words, see Page 70 in the item specifications.\r\n\r\nAll items should require students to cite specific textual evidence to support conclusions drawn from the text(s).',
  heading: 'Item Writing and Scoring Guidelines',
  evidence: [
    'The student will determine the meaning of a word or phrase based on its context in a literary text.',
    'The student will determine the intended meaning of academic/tier 2 words and domain-specific/tier 3 words in a literary text.',
    'The student will use resources to determine the correct meaning of an unknown word or phrase in a literary text.',
    'The student will use Greek or Latin word parts to determine the correct meaning of an unknown word or phrase in a literary text.'
  ],
  vocab: 'NA',
  tools: 'NA',
  stimInfo:
    'Each text must include one or more words that are at grades 3–5 reading level, OR words that have nuanced meanings, OR words that have multiple meanings and used differently in the text. Emphasis is placed on academic/tier 2 words. The target words must be important to the text and worthwhile assessing. The text must have clearly evident context that provides unambiguous support for the meaning of the targeted word or phrase.\r\n\r\nRefer to Smarter Balanced Assessment Consortium: English Language Arts & Literacy Computer Adaptive Test (CAT) and Performance Task (PT) Stimulus Specifications for more information on literary text types.',
  devNotes: 'NA',
  complexity: 'NA',
  dualText:
    'Clarification for Dual-Text Stimuli:\r\n\r\nWhen a dual-text stimulus contains one literary and one informational text, the literary text (text #1) is the primary focus, and the set of items must include items from the literary stimulus as well as items written across both texts. The informational text (text #2) **must only** be used as a foundational/background piece for the literary text, and no items can be written for **only** the informational text. If both texts are literary, items may be written to either or both texts. The title of the text should be included in the stem when more than one text is used.',
  accessibility: 'string',
  stem: [
    {
      stemDesc:
        '*(**Note**: In this automated version of the item specification, underlined text appears in italics.)*\r\n\r\n-   Read the [sentence(s)/line(s)].\r\n[Directly quoted sentence(s) or line(s) from passage, with *targeted word/phrase* underlined]\r\nWhat is the meaning of the [word/phrase] [*targeted word*/“targeted phrase”]?\r\n\r\n-   Read the [sentence(s)/line(s)].\r\n[Directly quoted sentence(s) or line(s) from passage, with *targeted word/phrase* underlined]\r\nWhat does the [word/phrase] [*targeted word*/“targeted phrase”] **most likely** mean?\r\n\r\n-   Read the [sentence(s)/line(s)].\r\n[Directly quoted sentence(s) or line(s) from passage, with *targeted word/phrase* underlined]\r\nWhich [word(s)/phrase] **best** state(s) the meaning of [*targeted word*/“targeted phrase”]?\r\n\r\n-   Read the [sentence(s)/line(s)].\r\n[Directly quoted sentence(s) or line(s) from passage, with *targeted word/phrase* underlined]\r\nWhat does the use of the [word/phrase] [*targeted word*/“targeted phrase”] show the reader?\r\n\r\n-   Read the [sentence(s)/line(s)].\r\n[Directly quoted sentence(s) or line(s) from passage, with *targeted word/phrase* underlined]\r\nThe [word/phrase] [*targeted word*/“targeted phrase”] has more than one meaning. What does the [word/phrase] [*targeted word*/“targeted phrase”] **most likely** tell the reader about [provide an idea/event/character/story element/etc.] in the passage?\r\n\r\n-   Read the [sentence(s)/line(s)].\r\n[Directly quoted sentence(s) or line(s) from passage, with *targeted word* underlined]\r\n A(n) [antonym/synonym] is a word that means the [opposite/same or nearly the same] of another word. What is the [antonym/synonym] of [*targeted word*]?\r\n\r\n-   Read the [sentence(s)/line(s)].\r\n [Directly quoted sentence(s) or line(s) from passage, with *targeted word/phrase* underlined]\r\n Pick the [word/phrase] that **best** defines [*targeted word*/“targeted phrase”] as it is used in the sentence(s).\r\n\r\n-   Read the [sentence(s)/line(s)].\r\n [Directly quoted sentence(s) or line(s) from passage, with *targeted word/phrase* underlined]\r\n What does the author tell the reader with the use of the [word/phrase] [*targeted word*/“targeted phrase”]?\r\n\r\n-   Read the dictionary entry.\r\n[*(part of speech)* **1.** [provide definition]; **2.** [provide definition]]\r\n Which [word/phrase] **best** matches the dictionary entry?\r\n\r\n-   Read the [sentence(s)/line(s)].\r\n [Directly quoted sentence(s) or line(s) from passage, with *targeted word* underlined]\r\nWhat does the [root/affix] in the word [*targeted word*] mean?',
      shortStem: 'Appropriate Stems'
    },
    {
      stemDesc:
        '*(**Note**: In this automated version of the item specification, underlined text appears in italics.)*\r\n\r\n-   Read the [sentence(s)/line(s)] from [title text #2].\r\n[Directly quoted sentence(s) or line(s) from passage, with *targeted word/phrase* underlined]\r\nWhich sentence from [title text #1] has a [word/phrase] that means the same thing as [*targeted word*/“targeted phrase”] from [text #2]?\r\n\r\n-   First, read the [sentence(s)/line(s)] from [title text #1].\r\n[Directly quoted sentence(s) or line(s) from passage, with *targeted word/phrase* underlined]\r\nNow read the [sentence(s)/line(s)] from [title text #2].\r\n[Directly quoted sentence(s) or line(s) from passage, with *targeted word/phrase* underlined]\r\nWhich [word/phrase] **best** matches the meaning of [*targeted word*/“targeted phrase” text #1] and [*targeted word*/“targeted phrase” text #2] as it is used in **both** passages?  \r\n**NOTE:** This stem is only used with two literary passages.',
      shortStem: 'Appropriate Stems for Dual-Text Stimuli'
    },
    {
      stemDesc:
        '*(**Note**: In this automated version of the item specification, underlined text appears in italics.)*\r\n\r\n-   Read the [sentence(s)/line(s)].\r\n[Directly quoted sentence(s) or line(s) from passage, with *targeted word/phrase* underlined]\r\nWhat does the [word/phrase] [*targeted word*/“targeted phrase”] **mostly** mean? Pick **two** choices.\r\n\r\n-   Read the [sentence(s)/line(s)].\r\n[Directly quoted sentence(s) or line(s) from passage, with *targeted word/phrase* underlined]\r\nWhat does the use of the [word/phrase] [*targeted word*/“targeted phrase”] show the reader? Pick **two** choices.\r\n\r\n-   Read the [sentence(s)/line(s)].\r\n[Directly quoted sentence(s) or line(s) from passage, with *targeted word/phrase* underlined]\r\nThe [word/phrase] [*targeted word*/“targeted phrase”] has more than one meaning. What does the [word/phrase] [*targeted word*/“targeted phrase”] **most likely** tell the reader about [provide an idea/event/character/story element/etc.] in the passage? Pick **two** choices.\r\n\r\n-   Read the [sentence(s)/line(s)].\r\n [Directly quoted sentence(s) or line(s) from passage, with *targeted word/phrase* underlined]\r\nWhat does the author tell the reader with the use of [*targeted word*/“targeted phrase”]? Pick **two** choices.\r\n\r\n-   Read the [sentence(s)/line(s)] from the passage.\r\n[Directly quoted sentence(s) or line(s) from passage, with *targeted word/phrase* underlined]\r\n How does the author’s use of the [word/phrase] [*targeted word*/“targeted phrase”] in the passage help the reader understand [provide concept/idea]? Pick **two** choices.',
      shortStem: 'Appropriate Stems'
    },
    {
      stemDesc:
        '*(**Note**: In this automated version of the item specification, underlined text appears in italics.)*\r\n\r\n-   Read the sentence(s) from [title text \\#2].\r\n[Directly quoted sentence(s) from passage, with *targeted word/phrase* underlined]\r\nWhich sentence from [title text \\#1] has a [word/phrase] that means the same thing as [*targeted word*/“targeted phrase”]? Pick **two** choices.\r\n\r\n-   First, read the sentence(s) from [title text \\#1].\r\n[Directly quoted sentence(s) from passage, with *targeted word/phrase* underlined]\r\nNow read the sentence(s) from [title text \\#2].\r\n[Directly quoted sentence(s) from passage, with *targeted word/phrase* underlined]\r\nWhich [word/phrase] **best** matches the meaning of [*targeted word*/“targeted phrase” text \\#1] and [*targeted word*/”targeted phrase” text \\#2] as they are used in **both** passages? Pick **two** choices.  \r\n**NOTE:** This stem is only used with two literary passages.',
      shortStem: 'Appropriate Stems for Dual-Text Stimuli'
    },
    {
      stemDesc:
        '*(**Note**: In this automated version of the item specification, underlined text appears in italics.)*\r\n\r\n-   Read the dictionary entry.\r\n[*(part of speech)* **1.** [provide definition]\r\nClick on the *underlined* [word/phrase] in the [sentence(s)/set(s) of sentences/line(s)/paragraph(s)] that **most closely** matches the definition of that word.\r\n[excerpted selectable text]\r\n\r\n-   The author uses a word that means [provide definition of academic word] in the text. Click on the *underlined* [word/phrase] in the [sentence(s)/set(s) of sentences/line(s)/paragraph(s)] that **best** shows that [idea/meaning].\r\n[excerpted selectable text]',
      shortStem: 'Appropriate Stems'
    },
    {
      stemDesc:
        '*(**Note**: In this automated version of the item specification, underlined text appears in italics.)*\r\n\r\n-   Read the [sentence(s)/line(s)] from [title text \\#2].\r\n[Directly quoted sentence(s)/line(s) from text, with *targeted word/phrase* underlined]\r\nClick on the *underlined* [word/phrase] in the [sentence(s)/set(s) of sentences/line(s)/paragraph(s)] from [title text \\#1] that means the same thing as [*targeted word*/“targeted phrase”].\r\n[excerpted selectable text from text \\#1]\r\n\r\n-   Read the sentence(s) from [title text \\#1].\r\n[Directly quoted sentence or line from text, with *targeted [word/phrase]* underlined]\r\nClick on the *underlined* [word/phrase] in the [sentences/paragraph] from [title text \\#2] that means the same thing as [*targeted word*/“targeted phrase”].\r\n[excerpted selectable text from text \\#2]  \r\n**NOTE:** This stem is only used with two literary passages.',
      shortStem: 'Appropriate Stems for Dual-Text Stimuli'
    }
  ],
  taskModels: [
    {
      taskName: 'Task Model 1',
      taskDesc:
        'The **item stem** will pose a question about the meaning of a targeted word or phrase in the passage. The sentence or sentences in which the targeted word is found are excerpted and need to include enough context to correctly determine meaning. More than one sentence may be necessary.\r\n\r\n**Formatting note:** in excerpts, both targeted words and phrases are underlined. In stems, targeted words are underlined; targeted phrases are placed within quotation marks.\r\n\r\nThe **answer choices** will present four options of similar structure using vocabulary on or below grade level. The correct answer will be a clearly discernible and correct meaning of the word or phrase. The **distractors** will be meanings that may be plausible to students who 1) use another meaning of the word/phrase without considering context, 2) misinterpret the word, phrase, and/or context, or 3) use the wrong context to determine the meaning.\r\n\r\n**Distractors** will reflect common student errors. \r\n\r\n**Rationales** should state the justification for the type of plausible distractor.',
      examples: 'NA',
      stimulus: 'NA'
    },
    {
      taskName: 'Task Model 2',
      taskDesc:
        'The **item stem** will pose a question about the meaning of a targeted word or phrase in the passage. The sentence or sentences in which the targeted word is found are excerpted and need to include enough context to correctly determine meaning. More than one sentence may be necessary.  The item stem will prompt the student to choose two answers.   \r\n\r\n**Formatting note:** In excerpts, both targeted words and phrases are underlined. In stems, targeted words are underlined; targeted phrases are placed within quotation marks.\r\n\r\nThe **answer choices** will present five or six options of similar structure using vocabulary on or below grade level. Of the options, there will be two correct answers. The correct answers will be a clearly discernible and correct meaning of the word or phrase. The **distractors** will be meanings that may be plausible to students who 1) use another meaning of the word/phrase without considering context, 2) misinterpret the word, phrase, and/or context, or 3) use the wrong context to determine the meaning.\r\n\r\n**Distractors** will reflect common student errors. \r\n\r\n**Rationales** should state the justification for the type of plausible distractor.',
      examples: 'Examples',
      stimulus: 'NA'
    },
    {
      taskName: 'Task Model 3',
      taskDesc:
        'The **item stem** will require students to select the word(s)/phrase(s) from sentence(s), set(s) of sentences, line(s), or paragraph(s) that best match a given dictionary entry or paraphrased definition. \r\n\r\n**Formatting note:** When excerpts are used, both targeted words and phrases are underlined. In stems, targeted words are underlined; targeted phrases are placed within quotation marks.\r\n\r\nThe **answer choices** will be five to eight selectable and underlined words or phrases from an excerpted selection of text. The excerpted text will be whole, continuous, and consecutive sections taken directly from the text. There will be only one correct response. The distractors will be selectable words or phrases on or below grade level and plausible to students who 1) do not read the text closely, 2) do not understand the definition, concept, or idea presented, or 3) use context for the wrong meaning of the target word/phrase.\r\n\r\n**NOTE:** If there are too many defensible options (check every possibility), do not use this item type; use Multiple Choice (Task Model 1) or Multiple Select (Task Model 2).\r\n\r\n**Distractors** will reflect common student errors. \r\n\r\n**Rationales** should state the justification for the type of plausible distractor.',
      examples:
        '**Format Example:**\r\n\r\n**The Format Example includes a sample of hot text from a grade 11 item and is included to provide guidance regarding *formatting purposes only*.**\r\n\r\n**Note:** Selectable text is a whole, continuous section of text.\r\n\r\n__________________________________________________________________________\r\nFirst, read the dictionary entry. \r\n\r\n(v) gather together or acquire an increasing number or quantity of; heap up\r\n\r\nClick on the *underlined* word in the paragraph that most closely matches the definition provided.\r\n\r\nThe snow on the side of the road was really starting to [*accumulate*]. The grass was now a pure, [*sparkling*] white carpet. The fire hydrants and tree branches were three inches taller, and the road was now a river of ice and water. Ashley told me not to worry because the highway would be dry as we slowly [*negotiated*] the narrow on-ramp to the interstate. I couldn’t help but smile as I read the sign: I-95 South. Was she taking me somewhere special for our winter holiday, maybe to visit Aunt Glenda in Delaware? I haven’t seen her in years, and I used to love visiting for family cook-outs. Aunt Glenda always made us feel welcome, and she had the cutest dogs named Tebow and Spikes that loved to play fetch with us. I wasn’t quite sure what our [*destination*] was, but I had to quickly admit that it wasn’t my first [*suspicion*] as I read the sign that said, “Thank You for Visiting Delaware, Come Back Soon!” and then just as quickly, “Welcome to Maryland, Buckle-Up and Please Drive Safely.” Now I was completely [*stumped*] as to which mysterious locale my sister was [*whisking*] us off to.',
      stimulus: 'NA'
    }
  ],
  rubrics: [
    'Correct response: 1 point; Incorrect response: 0 points',
    'All responses correct: 1 point; Any other response combination: 0 points',
    'Correct response: 1 point; Incorrect response: 0 points'
  ]
};
