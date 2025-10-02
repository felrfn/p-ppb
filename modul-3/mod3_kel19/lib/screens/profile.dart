import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

class ProfilePage extends StatefulWidget {
  final VoidCallback? onHomeTap;
  const ProfilePage({super.key, this.onHomeTap});

  @override
  State<ProfilePage> createState() => _ProfilePageState();
}

class _ProfilePageState extends State<ProfilePage> {
  // Data anggota kita gunakan dari kodemu
  final List<Map<String, String>> teamMembers = [
    {
      'Nama': 'Rafael Ardiansyah',
      'NIM': '21120123120007',
      'github': 'felrfn'
    },
    {
      'Nama': 'Akmal',
      'NIM': '211201231XXXXX',
      'github': 'Wizard-Gandalf'
    },
    {
      'Nama': 'Ardan',
      'NIM': '211201231XXXXX',
      'github': 'RDN14'
    },
    {
      'Nama': 'Rai',
      'NIM': '211201231XXXXX',
      'github': 'Rai9189'
    },
  ];

  Future<void> _launchURL(String username) async {
    if (username == 'xxxx' || username.isEmpty) return;

    final Uri url = Uri.parse('https://github.com/$username');
    if (!await launchUrl(url, mode: LaunchMode.externalApplication)) {
      throw Exception('Could not launch $url');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Our Team'),
        actions: [
          IconButton(
            icon: const Icon(Icons.home),
            onPressed: widget.onHomeTap,
          ),
        ],
      ),
      body: ListView.builder(
        padding: const EdgeInsets.all(16.0),
        itemCount: teamMembers.length,
        itemBuilder: (context, index) {
          final member = teamMembers[index];
          final githubUsername = member['github']!;
          final memberName = member['Nama']!;
          final memberNIM = member['NIM']!;

          return Card(
            elevation: 3,
            margin: const EdgeInsets.only(bottom: 16.0),
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(12),
            ),
            child: Padding(
              padding: const EdgeInsets.symmetric(vertical: 20.0, horizontal: 16.0),
              child: Column(
                children: [
                  CircleAvatar(
                    radius: 35,
                    backgroundImage: NetworkImage(
                        'https://avatars.githubusercontent.com/$githubUsername'),
                  ),
                  const SizedBox(height: 12),
                  Text(
                    memberName,
                    style: const TextStyle(
                      fontWeight: FontWeight.bold,
                      fontSize: 18,
                    ),
                    textAlign: TextAlign.center,
                  ),
                  const SizedBox(height: 4),
                  Text(
                    memberNIM,
                    style: TextStyle(color: Colors.grey.shade600, fontSize: 14),
                  ),
                  const SizedBox(height: 16),
                  const Divider(),
                  const SizedBox(height: 8),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: [
                      TextButton.icon(
                        icon: const Icon(Icons.info_outline),
                        label: const Text('Github'),
                        onPressed: () => _launchURL(githubUsername),
                      ),
                      TextButton.icon(
                        icon: const Icon(Icons.add_circle_outline),
                        label: const Text('Create'),
                        onPressed: () {
                        },
                      ),
                    ],
                  )
                ],
              ),
            ),
          );
        },
      ),
    );
  }
}