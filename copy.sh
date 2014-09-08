#!/usr/bin/env bash

set -e

# Base directory for this entire project
BASEDIR=$(cd $(dirname $0) && pwd)

# Source directory for unbuilt code
SRCDIR="$BASEDIR/src"

# Destination directory for built code
DISTDIR="$BASEDIR/dist"

cd "$BASEDIR"

# Copy & minify index.html to dist
cat "$SRCDIR/index.html" | \
perl -pe 's/\/\/.*$//gm;       # Strip JS comments' |
perl -pe 's/\n/ /g;            # Replace newlines with whitespace' |
perl -pe 's/<\!--.*?-->//g;    # Strip HTML comments' |
perl -pe 's/isDebug: *true,//; # Remove isDebug' |
perl -pe 's/\s+/ /g;           # Collapse whitespace' > "$DISTDIR/index.html"

echo "Copy complete"