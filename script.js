function generatePrompt() {

    let content =
    document.getElementById("content").value;

    let subject =
    document.getElementById("subject").value;

    let level =
    document.getElementById("level").value;

    let verification =
    document.getElementById("verification").value;

    let format =
    document.getElementById("format").value;

    let prompt = `Act as an AI Hallucination Auditor.

Audit the following content:

${content}

Subject Area:
${subject}

Fact Checking Level:
${level}

Web Verification:
${verification}

Output Format:
${format}

Instructions:

1. Break the content into individual claims.
2. Evaluate each claim separately.
3. Assign confidence levels:
   - High
   - Medium
   - Low

4. Identify hallucinated statements.
5. Explain why they may be inaccurate.
6. Provide corrected versions.
7. Suggest reliable sources.
8. Present findings in the requested format.
`;

    document.getElementById("output").value = prompt;
}

function copyPrompt() {

    let output =
    document.getElementById("output");

    output.select();

    document.execCommand("copy");

    alert("Prompt copied successfully!");
}