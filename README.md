# mafia

## Ready-to-paste log entries

**Day start line**
```
Day X begins. [Night result].
```

**Discussion sequence line (next to speak/pass tracker)**
```
Discussion order: [Player A] → [Player B] → [Player C] → [Player D]. Next to speak/pass: [Player A].
```

**Accusation thread format (Accuser/Accused turn order)**
```
Accusation thread:
Accuser: [Player A] → Accused: [Player B] → Response: [Player B] → Follow-up: [Player A].
```

**Voting tally template (majority rule, tie/insufficient majority handling)**
```
Vote tally: [Player A]=[Target/Abstain], [Player B]=[Target/Abstain], [Player C]=[Target/Abstain], [Player D]=[Target/Abstain].
Majority needed: [N]. Result: [Target] eliminated if majority reached; otherwise No elimination (tie/insufficient majority).
```

**Night start line and morning result line**
```
Night X begins. Roles act in order.
Morning X: [Night result].
```
# Mafia Moderator Pack

## Game Overview
Mafia is a social deduction party game where the **Mafia** secretly eliminate players at night while the **Town** works together during the day to identify and eliminate the Mafia. Players receive hidden roles. Days are spent discussing and voting. Nights are spent with hidden actions. The game ends when either:
- **Town wins**: All Mafia are eliminated.
- **Mafia wins**: Mafia equal or outnumber Town.

## Moderator Responsibilities
- Assign roles and privately message each player their role message.
- Keep the **Town Square log** up to date with day/night phases, eliminations, and vote outcomes.
- Run discussion, accusation, defense, rebuttal, and voting phases using the templates below.
- Collect night actions privately and resolve them fairly.
- Announce results clearly, without revealing hidden information.

## Random Player List (8)
1. Riley
2. Jordan
3. Casey
4. Morgan
5. Avery
6. Quinn
7. Taylor
8. Parker

## Role Messages (Copy/Paste Ready)

**[Role: Villager]**
You are a **Villager**.
- Goal: Eliminate all Mafia.
- You have no night action.
Keep notes and look for inconsistencies. Good luck!

**[Role: Mafia]**
You are **Mafia**.
- Goal: Eliminate Town until Mafia equal or outnumber Town.
- Each night, coordinate with Mafia to choose one player to eliminate.
Stay hidden and steer suspicion away from your team.

**[Role: Doctor]**
You are the **Doctor**.
- Goal: Help Town eliminate all Mafia.
- Each night, choose one player to protect (including yourself).
Your protection prevents the Mafia elimination on that target for the night.

**[Role: Detective]**
You are the **Detective**.
- Goal: Help Town eliminate all Mafia.
- Each night, investigate one player.
I will respond with **“Mafia”** or **“Not Mafia.”**

## Moderator Announcement Templates (Copy/Paste Ready)

**[Day Start]**
Day {#} begins.
Town Square log updated.
Remaining players: {list of alive players}.

**[Discussion Start]**
Discussion phase begins now. You have {time} minutes to discuss.
Post thoughts, suspicions, and questions in **Discussion**.

**[Accusation Start]**
Accusation phase begins now. You may make one accusation each in **Accusation**.
Accused player(s) will be asked to defend.

**[Voting Start]**
Voting phase begins now.
Cast your vote in **Voting** using: `Vote: {player name}`.
Majority eliminates. If tied, no one is eliminated.

**[Night Start]**
Night {#} begins.
All players must remain silent in public channels.
I will message roles with night actions.

## Player Prompts (Private Chat Tabs)

**[Discussion Tab Prompt]**
Share suspicions, alliances, and questions. Keep it civil and concise.

**[Accusation Tab Prompt]**
Make a single clear accusation. Provide a short reason.
Format: `Accuse: {player} — {reason}`

**[Defense #1 Tab Prompt]**
Respond to accusations. Clarify your actions and reasoning.

**[Defense #2 Tab Prompt]**
Second chance to defend if additional accusations arise.

**[Rebuttal Tab Prompt]**
Respond to defenses with brief counterpoints.

**[Voting Tab Prompt]**
Cast your vote: `Vote: {player name}`
Do not discuss in this tab.

## Step-by-Step Day/Night Procedure (Town Square Log Workflow)

**Day Phase**
1. **Update Town Square log** with `Day {#} begins`, alive players, and any overnight results.
2. Post **[Discussion Start]** in Town Square log and open Discussion tab.
3. After discussion time ends, post **[Accusation Start]** in Town Square log.
4. Collect accusations in Accusation tab; list accused players in Town Square log.
5. Open **Defense #1** for accused players; log that defenses are in progress.
6. Open **Defense #2** if needed; log any additional defenses.
7. Open **Rebuttal**; log rebuttals submitted.
8. Post **[Voting Start]** in Town Square log and open Voting tab.
9. Tally votes, announce outcome in Town Square log:
   - `Eliminated: {player}` or `No elimination (tie)`.
10. Update alive players list in Town Square log.

**Night Phase**
1. Post **[Night Start]** in Town Square log.
2. Privately message Mafia, Doctor, and Detective for actions.
3. Resolve actions in order:
   - Mafia selects target.
   - Doctor selects protection.
   - Detective investigates.
4. Record night results in Town Square log (no hidden details).
5. If a player is eliminated, update alive players list in Town Square log.
6. Proceed to next **Day Start**.
